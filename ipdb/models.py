from django.db import models

# Create your models here.
class Ipdb(models.Model):
    mac_addr = models.CharField(max_length=14)
    ip_addr = models.CharField(max_length=14)
    dept = models.CharField(max_length=20)
    noted = models.CharField(max_length=100)
