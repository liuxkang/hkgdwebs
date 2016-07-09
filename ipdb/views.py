from django.shortcuts import render_to_response
from django.http import HttpResponse
from .models import Ipdb,Dept_names
from django.template import loader
from django.views.decorators.csrf import csrf_protect
from ipdb.models import Ipdb
# Create your views here。
#@csrf_protect
def ipdb(request):
    page_index = 1;
    page_length = 20;           #每一页的显示的数量
    if(request.method == "POST"):
        _ip_addr = request.POST.get('ip_addr','')
        _mac_addr = request.POST.get('mac_addr','')
        _dept = request.POST.get('dept','')
        _noted = request.POST.get('noted','')
        ipdb_rec = Ipdb.objects.get(ip_addr = _ip_addr)
        ipdb_rec.mac_addr = _mac_addr
        ipdb_rec.dept = _dept
        ipdb_rec.noted = _noted
        ipdb_rec.save()
    if(request.method == "GET"):
        if(request.GET.getlist("page")):
            page_index = int(request.GET["page"])
    
    ip_data = Ipdb.objects.order_by("id")
    depts_data = Dept_names.objects.order_by("dept_name")
    page_size = []
    for i in range(1,int(len(ip_data)/page_length)+2):
        page_size.append(i)
    ip_data = ip_data[(page_index-1)*page_length:(page_index*page_length)]
    return render_to_response("ipdb/ipdb.html",locals())
