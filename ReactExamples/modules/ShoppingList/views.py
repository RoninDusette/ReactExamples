from rest_framework import viewsets
from .models import List
from .models import Item
from .serializers import ListSerializer
from .serializers import ItemSerializer


class ListViewSet(viewsets.ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
