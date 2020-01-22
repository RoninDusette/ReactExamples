from rest_framework import serializers
from .models import List
from .models import Item


class ListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = List
        fields = [
            'name',
            'date_created',
        ]


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = [
            'list',
            'name',
            'price',
        ]