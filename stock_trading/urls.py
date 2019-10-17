from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('search_stocks', views.search_stocks, name='search_stocks')
    path('get_quote/<str:company_code>', views.get_quote),
]