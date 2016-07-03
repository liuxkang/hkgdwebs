from django.shortcuts import render_to_response
from django.http import HttpResponse
from .models import Ipdb,Dept_names
from django.template import loader
from django.views.decorators.csrf import csrf_protect
from ipdb.models import Ipdb
# Create your views here。
#@csrf_protect
def ipdb(request):
    if(request.method == "POST"):
        _ip_addr = request.POST['ip_addr']
        _mac_addr = request.POST['mac_addr']
        _dept = request.POST['dept']
        _noted = request.POST['noted']
        ipdb_rec = Ipdb.objects.get(ip_addr = _ip_addr)
        ipdb_rec.mac_addr = _mac_addr
        ipdb_rec.dept = _dept
        ipdb_rec.noted = _noted
        ipdb_rec.save()
    ipdata = Ipdb.objects.order_by("id")
    depts_data = Dept_names.objects.all()
    return render_to_response("ipdb/ipdb.html",locals())
