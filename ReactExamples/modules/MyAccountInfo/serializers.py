from rest_framework import serializers
from .models import Account


class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = [
            'first_name',
            'last_name',
            'email_address',
            'daily_driver',
        ]
