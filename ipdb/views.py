from django.shortcuts import render_to_response
from django.http import HttpResponse
from .models import Ipdb,Dept_names
from django.template import loader
# Create your views here.
def ipdb(request):
    ipdata = Ipdb.objects.all()
    depts_data = Dept_names.objects.all()
    ip_value = request.GET.get('ip_value')
    context = {
        'ipdata':ipdata,
        'depts_data':depts_data,
    }
    return render_to_response("ipdb/ipdb.html",locals())
