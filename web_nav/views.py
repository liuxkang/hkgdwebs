from django.shortcuts import render_to_response
from django.http import HttpResponse
from .models import Web_nav
from django.template import loader
# Create your views here.

def web_nav(request):
    webdata = Web_nav.objects.all()
    return render_to_response("web_nav/web_nav.html",locals())

def test(request):
    test = "没有"
    if(request.method == "POST"):
        test = request.POST["test_value"]
    return render_to_response("web_nav/test.html",locals())