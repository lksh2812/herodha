from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import redirect

import os
import json
from elasticsearch import Elasticsearch
ELASTICSEARCH_URL = os.getenv('ELASTICSEARCH_URL')
es = Elasticsearch(ELASTICSEARCH_URL)


# Create your views here.

from nsetools import Nse
nse = Nse()

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


    stock = request.POST['stock']
    result = es.search(index='stocks', body={'query': {'multi_match': \
        {'query': stock, 'fields': ['*']}}})
    return JsonResponse({"result": result})


def get_quote(request, company_code):
    stock = nse.get_quote(company_code)
    return render(request, 'get_quote.html', {'stock_data' : stock})

