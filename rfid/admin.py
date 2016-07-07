from django.contrib import admin

# Register your models here.
from .models import Rfid,It_types
admin.site.register(Rfid)
admin.site.register(It_types)