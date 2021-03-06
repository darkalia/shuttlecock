from django.db import models


class Gym(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=True, default='')
    address = models.TextField()

    class Meta:
        ordering = ['name']
