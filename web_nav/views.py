from django.shortcuts import render
from django.http import HttpResponse
from .models import Web_nav
from django.template import loader
# Create your views here.

def web_nav(request):
    webdata = Web_nav.objects.all()
    template = loader.get_template("web_nav/web_nav.html")
    context = {
        'webdata':webdata,
    }
    return HttpResponse(template.render(context,request))