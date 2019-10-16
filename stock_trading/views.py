from django.shortcuts import render
from nsetools import Nse
nse = Nse()
import os
from elasticsearch import Elasticsearch
ELASTICSEARCH_URL = os.getenv('ELASTICSEARCH_URL')
es = Elasticsearch(ELASTICSEARCH_URL)
import json
from django.http import JsonResponse
# Create your views here.

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
    stock = request.POST['stock']
    result = es.search(index='stocks', body={'query': {'multi_match': \
        {'query': stock, 'fields': ['*']}}})
    return JsonResponse({"result": result})
