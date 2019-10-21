from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import datetime

class User(AbstractUser):
    
    # add additional fields in here
    funds = models.FloatField(default=100000.00)


    def __str__(self):
        return self.email


class BuyTransaction(models.Model):
    
    company_name = models.CharField(max_length=100)
    company_code = models.CharField(max_length=50)
    qty = models.IntegerField()
    last_price = models.FloatField()
    Total = models.FloatField()
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now=True)
    avg_price = models.FloatField(default=0)

    def __str__(self):
        return '<User:{} Transactions {}>'.format(self.user_id__username, self.company_name)

class SellTransaction(models.Model):
    
    company_name = models.CharField(max_length=100)
    company_code = models.CharField(max_length=50)
    qty = models.IntegerField()
    buying_price = models.FloatField()
    selling_price = models.FloatField()
    profit = models.FloatField()
    total_selling = models.FloatField()
    date = models.DateTimeField(default=datetime.now, blank=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    

    def __str__(self):
        return '<User:{} Transactions {}>'.format(self.user_id__username, self.company_name)

class Bookmark(models.Model):
    
    company_code = models.CharField(max_length=50)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    

    def __str__(self):
        return '<User:{} Transactions {}>'.format(self.user_id__username, self.company_code)