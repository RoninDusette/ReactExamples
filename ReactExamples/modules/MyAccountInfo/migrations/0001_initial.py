# Generated by Django 3.0.2 on 2020-01-19 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=50, null=True, verbose_name='First name')),
                ('last_name', models.CharField(blank=True, max_length=50, null=True, verbose_name='Last name')),
                ('email_address', models.EmailField(blank=True, max_length=50, null=True, verbose_name='Email')),
                ('daily_driver', models.CharField(blank=True, max_length=50, null=True, verbose_name='Daily Driver')),
                ('gender', models.CharField(blank=True, choices=[('MALE', 'Male'), ('FEMALE', 'Female')], max_length=50, null=True, verbose_name='Gender')),
            ],
        ),
    ]