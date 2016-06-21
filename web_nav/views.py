from django.shortcuts import render_to_response
from django.http import HttpResponse
from .models import Web_nav
from django.template import loader
# Create your views here.

def web_nav(request):
    webdata = Web_nav.objects.all()
    context = {
        'webdata':webdata,
    }
    return render_to_response("web_nav/web_nav.html",locals())

def test(request):
    testdata = Web_nav.objects.all()
    context = {
        'testdata':testdata,
    }
    return render_to_response("web_nav/test.html",locals())