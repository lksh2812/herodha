from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import redirect
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.contrib.auth.decorators import login_required
from .models import BuyTransaction
from django.contrib import messages


import os
import json
from elasticsearch import Elasticsearch
ELASTICSEARCH_URL = os.getenv('ELASTICSEARCH_URL')
es = Elasticsearch(ELASTICSEARCH_URL)

from nsetools import Nse
nse = Nse()

from .forms import CustomUserCreationForm

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
    company_name = request.POST.get("name")
    company_code = request.POST.get('symbol')
    last_price = request.POST.get('lastPrice')
    quantity = request.POST.get('qty')
    total = request.POST.get('total')
    available_funds = current_user.funds 
    if available_funds < total:
        return "Insuffient funds!"
    else:
        available_funds -= total
        transaction = BuyTransaction(user_id=buyer_id, company_name=company_name, company_code=company_code, qty=quantity, last_price=last_price, Total=total)
        transaction.save()

    # print(company_name)
    # print(company_code)
    # print(total)
    return redirect('get_quote', company_code=company_code)