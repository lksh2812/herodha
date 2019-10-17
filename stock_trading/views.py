from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView

from .forms import CustomUserCreationForm

# Create your views here.
# from .forms import RegistrationForm
# from django.contrib.auth.models import User

def index(request):
    return render(request, 'index.html')


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