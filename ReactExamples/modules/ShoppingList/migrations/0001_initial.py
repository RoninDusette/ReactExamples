# Generated by Django 3.0.2 on 2020-01-19 17:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='List',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(auto_created=True, blank=True, null=True, verbose_name='Date created')),
                ('name', models.CharField(blank=True, max_length=50, null=True, verbose_name='List name')),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True, verbose_name='Item name')),
                ('price', models.PositiveIntegerField(blank=True, null=True, verbose_name='Price')),
                ('list', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='ShoppingList.List')),
            ],
        ),
    ]
