from django.contrib import admin
from .models import User, SellTransaction, BuyTransaction, Bookmark
admin.site.register(SellTransaction)
admin.site.register(BuyTransaction)
admin.site.register(Bookmark)

# Register your models here.
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    # form = CustomUserChangeForm
    model = User
    list_display = ['email', 'username',]

admin.site.register(User, CustomUserAdmin)

