# Generated by Django 2.2.6 on 2019-10-21 05:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stock_trading', '0007_remove_buytransaction_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='buytransaction',
            name='date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]