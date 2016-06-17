from django.db import models
# Create your models here.
class Web_nav(models.Model):
    name = models.CharField(max_length=30)
    addr = models.CharField(max_length=255)
    img_name = models.CharField(max_length=100)
    def __str__(self):
        return self.name
        