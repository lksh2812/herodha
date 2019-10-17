from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ('username', 'email')

    def __init__(self, *args, **kwargs):
       super(CustomUserCreationForm, self).__init__(*args, **kwargs)        
       self.fields['username'].widget.attrs.update({'class':'form-control','placeholder':'Username'})        
       self.fields['email'].widget.attrs.update({'class':'form-control','placeholder':'Email'})
       self.fields['username'].help_text = None
       self.fields['password1'].widget.attrs.update({'class':'form-control','placeholder':'Password'})
       self.fields['password1'].help_text = None
       self.fields['password2'].help_text = None
       self.fields['password2'].widget.attrs.update({'class':'form-control','placeholder':'Confirm Password'})

