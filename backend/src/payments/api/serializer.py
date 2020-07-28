from rest_framework import serializers
from payments.models import Payment


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ('number', 'name', 'expiry',
                  'cvc', 'issuer', 'amount', 'company', 'time_created', 'time_transact', 'paymentid', 'status')
