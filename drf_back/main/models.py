from django.db import models


class Color(models.Model):
    value = models.CharField(max_length=6)


# Create your models here.
