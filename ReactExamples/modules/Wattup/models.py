from django.db import models


class Message(models.Model):
    full_name = models.CharField("Full name", max_length=50, blank=True, null=True)
    email_address = models.EmailField("Email", max_length=50, blank=True, null=True)
    subject = models.CharField("Subject", max_length=50, blank=True, null=True)
    message = models.TextField("Message", max_length=1000, blank=True, null=True)
    date_sent = models.DateTimeField("Date sent", auto_created=True, blank=True, null=True)

    def __str__(self):
        return "{} - {}".format(self.date_sent.date(), self.full_name)
