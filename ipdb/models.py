from django.db import models

# Create your models here.
class Ipdb(models.Model):
    ip_addr = models.GenericIPAddressField(primary_key = True)
    mac_addr = models.CharField(max_length=14,null=True)  
    vlan_id = models.CharField(max_length=10)
    dept = models.CharField(max_length=20,null=True)
    noted = models.CharField(max_length=100,null=True)
    id = models.IntegerField()
    def __str__(self):
        return self.mac_addr
        

class Dept_names(models.Model):
    dept_name = models.CharField(max_length=20,primary_key=True)
    def __str__(self):
        return self.dept_name