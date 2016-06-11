from django.db import models

# Create your models here.
class Ipdb(models.Model):
    mac_addr = models.CharField(max_length=14)
    ip_addr = models.CharField(max_length=14)
    vlan_id = models.CharField(max_length=5)
    dept = models.CharField(max_length=20)
    noted = models.CharField(max_length=100)
    def __str__(self):
        return self.mac_addr