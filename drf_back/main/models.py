from django.db import models


class Color(models.Model):
    value = models.CharField(max_length=6)

    def __str__(self):
        return self.value


# Create your models here.
