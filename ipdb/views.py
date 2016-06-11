from django.shortcuts import render
from django.http import HttpResponse
from .models import Ipdb
from django.template import loader
# Create your views here.
def index(request):
    ipdata = Ipdb.objects.all()
    index_template = loader.get_template("ipdb/index.html")
    context = {
        'ipdata ':ipdata,
    }
    return HttpResponse(index_template.render(context,request))
