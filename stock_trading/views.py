from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def get_quote(request):
    return render(request, 'get_quote.html', {'data' : 'Saurabh Panja'})
