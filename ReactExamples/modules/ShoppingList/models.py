from django.db import models


class List(models.Model):
    name = models.CharField("List name", max_length=50, blank=True, null=True)
    date_created = models.DateTimeField("Date created", auto_created=True, blank=True, null=True)

    def __str__(self):
        return self.name


class Item(models.Model):
    list = models.ForeignKey(List, on_delete=models.SET_NULL, blank=True, null=True)
    name = models.CharField("Item name", max_length=50, blank=True, null=True)
    price = models.PositiveIntegerField("Price", blank=True, null=True)

    def __str__(self):
        return self.name
