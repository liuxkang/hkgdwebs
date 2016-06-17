from django.shortcuts import render
from django.http import HttpResponse
from .models import Ipdb
from django.template import loader
# Create your views here.
def ipdb(request):
    ipdata = Ipdb.objects.all()
    ipdb_template = loader.get_template("ipdb/ipdb.html")
    context = {
        'ipdata':ipdata,
    }
    return HttpResponse(ipdb_template.render(context,request))
