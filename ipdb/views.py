from django.shortcuts import render_to_response
from django.http import HttpResponse
from .models import Ipdb
from django.template import loader
# Create your views here.
def ipdb(request):
    ipdata = Ipdb.objects.all()
    ip_value = request.GET.get('ip_value')
    context = {
        'ipdata':ipdata,
    }
    return render_to_response("ipdb/ipdb.html",locals())
