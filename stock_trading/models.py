from django.contrib.auth.models import AbstractUser
from django.db import models

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
    avg_price = models.FloatField(default=0)

    def __str__(self):
        return '<User:{} Transactions {}>'.format(self.user_id__username, self.company_name)
