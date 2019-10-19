from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import redirect
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.contrib.auth.decorators import login_required
from .models import BuyTransaction, SellTransaction
from django.contrib import messages
from django.http import JsonResponse, HttpResponse



import os
import json
from elasticsearch import Elasticsearch
ELASTICSEARCH_URL = os.getenv('ELASTICSEARCH_URL')
es = Elasticsearch(ELASTICSEARCH_URL)

from nsetools import Nse
nse = Nse()

from .forms import CustomUserCreationForm

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
        result = result['hits']['hits'][0]['_source']['symbol']
        return redirect("/get_quote/{}".format(result))
    except:
        return redirect("/")


def get_quote(request, company_code):
    stock = nse.get_quote(company_code)
    return render(request, 'get_quote.html', {'stock_data' : stock})

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
        if bt is None:
            
            transaction = BuyTransaction(user_id=current_user, company_name=company_name, company_code=company_code, qty=quantity, last_price=last_price, Total=total, avg_price=last_price)
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
    last_price = float(request.POST.get('lastPrice'))
    quantity = int(request.POST.get('qty'))

    old_quantity = bt.qty
    if quantity > old_quantity:
        messages.error(request, "Not enough stock quantity to sell.")
        return redirect('/get_quote/{}'.format(company_code))
    new_quantity = old_quantity - quantity
    sell_value = float(request.POST.get('total'))
    old_total = bt.Total
    new_total = old_total - sell_value
    avg_price = bt.avg_price
    profit = (last_price - avg_price)*quantity
    bt.qty = new_quantity
    bt.last_price = last_price
    bt.Total = new_total
    bt.save()

    sell_transaction = SellTransaction(company_name=company_name, company_code=company_code, qty=quantity, buying_price=avg_price, selling_price=last_price, profit=profit,  total_selling=sell_value, user_id=current_user)
    sell_transaction.save()
    messages.info(request, 'Your transaction was successful.')
    current_user.funds += sell_value

    return redirect('/get_quote/{}'.format(company_code))


def get_current_price(request, company_code):
    stock_data = nse.get_quote(company_code)
    return JsonResponse({'stock_data' : stock_data})


def dashboard(request):
    return render(request, 'dashboard.html')

@login_required(login_url='/accounts/login')
def current_holdings(request):
    current_user = request.user
    print(current_user.id)
    obj = BuyTransaction.objects.filter(user_id=current_user.id)
    obj = list(obj)
    return render(request, 'current_holdings.html', {'current_shares':obj})
