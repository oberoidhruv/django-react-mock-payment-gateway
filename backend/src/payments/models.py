from django.contrib.auth import get_user_model
from django.db import models
from django.utils import timezone
# Create your models here.
User = get_user_model()


class Payment(models.Model):
    number = models.CharField(max_length=20)
    name = models.CharField(max_length=30)
    expiry = models.CharField(max_length=5)
    cvc = models.IntegerField()
    issuer = models.CharField(max_length=15)
    amount = models.IntegerField()
    company = models.IntegerField()
    paymentid = models.AutoField(primary_key=True)

    time_created = models.DateTimeField(auto_now=True)
    time_transact = models.DateTimeField(auto_now_add=True)

    PROCESSING = 'Processing'
    SUCCESSFUL = 'Successful'
    DECLINED = 'Declined'
    DISPUTED = 'Disputed'

    STATUS = [
        (PROCESSING, 'Processing'),
        (SUCCESSFUL, 'Successful'),
        (DECLINED, 'Declined'),
        (DISPUTED, 'Disputed'),
    ]

    status = models.CharField(
        max_length=10, choices=STATUS, default="Processing", auto_created=True)

    def __repr__(self):
        return self.amount
