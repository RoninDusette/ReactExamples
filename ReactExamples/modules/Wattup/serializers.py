from rest_framework import serializers
from .models import Message


class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Message
        fields = [
            'full_name',
            'email_address',
            'subject',
            'message',
            'date_sent',
        ]