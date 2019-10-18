from django.urls import path, include
from . import views
from .views import SignUpView
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.index, name='index'),
    path('registration/', SignUpView.as_view(), name='signup'),
    path('search_stocks', views.search_stocks, name='search_stocks'),
    path('get_quote/<str:company_code>', views.get_quote),
    path('buy/<str:company_code>/', views.buy),
    path('accounts/', include('django.contrib.auth.urls')),
    path('sell/<str:company_code>/', views.sell),
]