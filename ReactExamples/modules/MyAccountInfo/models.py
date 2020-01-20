from django.db import models


class Account(models.Model):
    GENDER_CHOICES = (
        ("MALE", "Male"),
        ("FEMALE", "Female")
    )
    first_name = models.CharField("First name", max_length=50, blank=True, null=True)
    last_name = models.CharField("Last name", max_length=50, blank=True, null=True)
    email_address = models.EmailField("Email", max_length=50, blank=True, null=True)
    daily_driver = models.CharField("Daily Driver", max_length=50, blank=True, null=True)
    gender = models.CharField("Gender", choices=GENDER_CHOICES, max_length=50, blank=True, null=True)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)
