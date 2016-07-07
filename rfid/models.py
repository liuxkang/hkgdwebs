from django.db import models

# Create your models here.
class Rfid(models.Model):
    rfid = models.CharField(max_length=15,primary_key=True)
    it_type = models.CharField(max_length=30,null=True)          #IT资产类型
    sn = models.CharField(max_length=50,null=True)                #序列号
    dept = models.CharField(max_length=30,null=True)
    user = models.CharField(max_length=10,null=True)
    time = models.DateField(null=True)
    def __str__(self):
        return self.rfid

class It_types(models.Model):
    type_name = models.CharField(max_length=30,primary_key=True)
    def __str__(self):
        return self.type_name