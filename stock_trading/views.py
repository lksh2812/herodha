from django.shortcuts import render
from nsetools import Nse

# Create your views here.

nse = Nse()
infosys_stock = nse.get_quote('infy')


def index(request):
    return render(request, 'index.html')

def get_quote(request):
    return render(request, 'get_quote.html', {'stock_data' : infosys_stock})
