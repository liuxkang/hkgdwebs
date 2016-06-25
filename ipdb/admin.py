from django.contrib import admin

# Register your models here.
from .models import Ipdb,Dept_names
admin.site.register(Ipdb)
admin.site.register(Dept_names)