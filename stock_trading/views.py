from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.contrib.auth.decorators import login_required
from .models import BuyTransaction, SellTransaction, Bookmark, User, Transaction
from django.contrib import messages
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt


import os
import json
import random
from elasticsearch import Elasticsearch
ELASTICSEARCH_URL = os.getenv('ELASTICSEARCH_URL')
es = Elasticsearch(ELASTICSEARCH_URL)

from nsetools import Nse
nse = Nse()

from .forms import CustomUserCreationForm

from .checksum import *

from django.conf import settings
from django.core.cache.backends.base import DEFAULT_TIMEOUT
from django.views.decorators.cache import cache_page
CACHE_TTL = getattr(settings, 'CACHE_TTL', DEFAULT_TIMEOUT)


#Market Action
nifty_50 = nse.get_index_quote('nifty 50')
nifty_bank = nse.get_index_quote('nifty bank')
nifty_pharma = nse.get_index_quote('nifty pharma')
nifty_it = nse.get_index_quote('nifty it')
nifty_auto = nse.get_index_quote('nifty auto')

#Top Gainers
top_gainers = nse.get_top_gainers()

#Top Losers
top_losers = nse.get_top_losers()


# Create your views here.
# from .forms import RegistrationForm
# from django.contrib.auth.models import User


# def registration(request):
#     # if this is a POST request we need to process the form data
#     if request.method == 'POST':
#         # create a form instance and populate it with data from the request:
#         form = RegistrationForm(request.POST)
#         print('hello')
#         # check whether it's valid:
#         if form.is_valid():
#             user = User.objects.create_user(form.cleaned_data['username'], form.cleaned_data['email'], form.cleaned_data['password1'])
#             print(user, 'hi')
#             # user = User()
#             # user.username = form.cleaned_data['username']
#             # user.email = form.cleaned_data['email']
#             # user.password = form.cleaned_data['password1']
#             # user.save()
#             # redirect to a new URL:
#             return HttpResponseRedirect('/login/')

#     # if a GET (or any other method) we'll create a blank form
#     else:
#         form = RegistrationForm()

#     return render(request, 'registration_form.html', {'form': form})



class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration.html'



def index(request):
    # #Market Action
    # nifty_50 = nse.get_index_quote('nifty 50')
    # nifty_bank = nse.get_index_quote('nifty bank')
    # nifty_pharma = nse.get_index_quote('nifty pharma')
    # nifty_it = nse.get_index_quote('nifty it')
    # nifty_auto = nse.get_index_quote('nifty auto')

    # #Top Gainers
    # top_gainers = nse.get_top_gainers()

    # #Top Losers
    # top_losers = nse.get_top_losers()

    return render(request, 'index.html', {'nifty_50':nifty_50, \
        'nifty_auto':nifty_auto, 'nifty_bank':nifty_bank, \
        'nifty_it':nifty_it, 'nifty_pharma':nifty_pharma, \
        'top_gainers':top_gainers, 'top_losers':top_losers})


def search_stocks(request):
    try:
        stock = request.POST['stock']
        result = es.search(index='stocks', body={'query': {'multi_match': \
            {'query': stock, 'fields': ['*']}}})
        print(result)
        result = result['hits']['hits'][0]['_source']['symbol']
        return redirect("/get_quote/{}".format(result))
    except:
        return redirect("/")


def get_quote(request, company_code):
    stock = nse.get_quote(company_code)
    try:
        bm = Bookmark.objects.get(user_id=request.user.id, company_code=company_code.upper())
    except Bookmark.DoesNotExist:
        bm = None
    
    if bm is None:
        status = False
    else:
        status = True
    return render(request, 'get_quote.html', {'stock_data' : stock, 'bookmark_status': status})

@login_required(login_url='/accounts/login/')
def buy(request, company_code):
    current_user = request.user
    buyer_id = current_user.id
    try:
        bt = BuyTransaction.objects.get(user_id=buyer_id, company_code=company_code)
    except BuyTransaction.DoesNotExist:
        bt = None
    
    company_name = request.POST.get("name")
    company_code = request.POST.get('symbol')
    last_price = float(request.POST.get('lastPrice'))
    quantity = int(request.POST.get('qty'))
    total = float(request.POST.get('total'))
    available_funds = current_user.funds 
    print(buyer_id)
    if available_funds < total:
        messages.error(request, 'Insufficient funds.')
        return redirect('/get_quote/{}'.format(company_code))
    else:
        available_funds -= total
        current_user.funds = available_funds
        current_user.save()
        if bt is None:
            
            transaction = BuyTransaction(user_id=current_user, company_name=company_name, company_code=company_code, qty=quantity, last_price=last_price, Total=total, avg_price=last_price, date=datetime.now)
            transaction.save()
            messages.info(request, 'Your transaction was successful.')
        else:
            old_quantity = bt.qty
            new_quantity = old_quantity + quantity
            new_total = new_quantity*last_price
            avg_price = bt.avg_price
            new_avg_price = ((old_quantity*avg_price)+(quantity*last_price))/(old_quantity+quantity)
            bt.qty = new_quantity
            bt.last_price = last_price
            bt.Total = new_total
            bt.avg_price = new_avg_price
            bt.date = datetime.now
            bt.save()
            messages.info(request, 'Your transaction was successful.')
            # bt.update(qty=new_quantity, last_price=last_price, Total=new_total)


    # print(company_name)
    # print(company_code)
    # print(total)
    
    return redirect('/get_quote/{}'.format(company_code))


@login_required(login_url='/accounts/login')
def sell(request, company_code):
    current_user = request.user
    buyer_id = current_user.id
    bt = BuyTransaction.objects.get(user_id=buyer_id, company_code=company_code)
    avg_price = bt.avg_price

    company_name = request.POST.get("name")
    company_code = request.POST.get('symbol')
    sell_value = float(request.POST.get('total'))
    quantity = int(request.POST.get('qty'))
    last_price = sell_value/quantity

    old_quantity = bt.qty
    if quantity > old_quantity:
        messages.error(request, "Not enough stock quantity to sell.")
        return redirect('/get_quote/{}'.format(company_code))
    new_quantity = old_quantity - quantity
    old_total = bt.Total
    new_total = old_total - sell_value
    avg_price = bt.avg_price
    profit = (last_price - avg_price)*quantity
    bt.qty = new_quantity
    bt.last_price = last_price
    bt.Total = new_total
    bt.save()
    current_user.funds += sell_value
    current_user.save()

    sell_transaction = SellTransaction(company_name=company_name, company_code=company_code, qty=quantity, buying_price=avg_price, selling_price=last_price, profit=profit,  total_selling=sell_value, user_id=current_user)
    sell_transaction.save()
    messages.info(request, 'Your transaction was successful.')
    current_user.funds += sell_value

    return redirect('/current_holdings'.format(company_code))


def get_current_price(request, company_code):
    stock_data = nse.get_quote(company_code)
    return JsonResponse({'stock_data' : stock_data})


@csrf_exempt
def add_company(request):
    current_user = request.user
    response = json.load(request)
    company_code = response

    print(company_code)
    bookmark = Bookmark(user_id=current_user, company_code=company_code)
    bookmark.save()
    return HttpResponse(status=201)

@csrf_exempt
def remove_company(request):
    current_user = request.user
    response = json.load(request)
    company_code = response
    bookmark = Bookmark.objects.get(user_id=current_user, company_code=company_code)
    bookmark.delete()
    return HttpResponse(status=200)
  

@login_required(login_url='/accounts/login')
def dashboard(request):
    return render(request, 'dashboard.html')


@login_required(login_url='/accounts/login')
def current_holdings(request):
    current_user = request.user
    bookmarks = Bookmark.objects.filter(user_id=current_user.id).values()
    obj = BuyTransaction.objects.filter(user_id=current_user.id)
    obj = list(obj)
    return render(request, 'current_holdings.html', {'current_shares':obj, 'bookmarks': bookmarks})


@login_required(login_url='/accounts/login')
def past_holdings(request):
    current_user = request.user
    # print(current_user.id)
    bookmarks = Bookmark.objects.filter(user_id=current_user.id).values()
    obj = list(SellTransaction.objects.filter(user_id=current_user.id))
    # obj = list(obj)
    return render(request, 'past_holdings.html', {'past_shares':obj, 'bookmarks': bookmarks})

@login_required(login_url='/accounts/login')
def profile(request):
    current_user = request.user
    bookmarks = Bookmark.objects.filter(user_id=current_user.id).values()
    return render(request, 'profile.html', {'user' : current_user , 'bookmarks': bookmarks})

#not needed
@login_required(login_url='/accounts/login')
def get_bookmarks(request):
    current_user = request.user
    bookmarks = Bookmark.objects.filter(user_id=current_user.id).values()
    return render(request, 'bookmarks.html', {'bookmarks': bookmarks})
    # return JsonResponse({'bookmarks': list(bookmarks)}, safe=False)


@login_required(login_url='/accounts/login')
def addfunds(request):
    if request.method == "POST":
        amount = request.POST.get('amount')
        user_id = request.user.id
        order_id = random.randint(100000000000,999999999999)
        MERCHANT_KEY = os.getenv('MERCHANT_KEY')
        paytmParams = {
                    'MID': os.getenv('MID'),
                    'ORDER_ID': str(order_id)+str(user_id),
                    'TXN_AMOUNT': str(amount),
                    'CUST_ID': str(user_id),
                    'INDUSTRY_TYPE_ID': 'Retail',
                    'WEBSITE': 'WEBSTAGING',
                    'CHANNEL_ID': 'WEB',
                    'CALLBACK_URL':'http://127.0.0.1:8000/payments/',
                }
        checksum = generate_checksum(paytmParams, MERCHANT_KEY)
        return render(request, 'paytm.html', {'paytmParams':paytmParams, \
            'checksum':checksum})

    else:
        return render(request, 'addfunds.html')


# paytm will send post request here
@csrf_exempt
def payments(request):
    MERCHANT_KEY = os.getenv('MERCHANT_KEY')
    form = request.POST
    response_dict = {}
    for i in form.keys():
        response_dict[i] = form[i]
        if i == 'CHECKSUMHASH':
            checksum = form[i]

    verify = verify_checksum(response_dict, MERCHANT_KEY, checksum)
    order_id = response_dict.get('ORDERID')
    user_id = int(order_id[12:])
    amount = float(response_dict.get('TXNAMOUNT'))
    user = User.objects.get(id=user_id)
    if verify:
        if response_dict['RESPCODE'] == '01':
            user.funds = user.funds + amount
            user.save()
            order = Transaction(user_id=user, order_id=order_id, amount=amount, status=True, date=datetime.now)
            order.save()
        else:
            # print('order was not successful because' + response_dict['RESPMSG'])
            order = Transaction(user_id=user, order_id=order_id, amount=amount, status=False, date=datetime.now)
            order.save()
    return render(request, 'paymentstatus.html', {'response': response_dict})
