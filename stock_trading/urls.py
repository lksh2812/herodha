from django.urls import path, include
from . import views
from .views import SignUpView

urlpatterns = [
    path('', views.index, name='index'),
    path('registration/', SignUpView.as_view(), name='signup'),
    path('search_stocks', views.search_stocks, name='search_stocks'),
    path('get_quote/<str:company_code>', views.get_quote),
    path('accounts/', include('django.contrib.auth.urls')),
]