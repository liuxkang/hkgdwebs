from django.shortcuts import render_to_response
from django.http import HttpResponse
from .models import Ipdb,Dept_names
from django.template import loader
from django.views.decorators.csrf import csrf_protect
from ipdb.models import Ipdb
# Create your views here。
#@csrf_protect
def ipdb(request):
    page_length = 20           #每一页的显示的数量
    vlan_data ={
        "Vlan201":'1',
        "Vlan202":'0',
        "Vlan203":'0',
    }
    show_all_flag = request.session.get("show_all_flag",'0')
    ip_data = Ipdb.objects.filter(vlan_id='none')
    page_index = int(request.session.get("page_index","1"))
    vlan_data = request.session.get("vlan_data",vlan_data)
    
    if(request.method == "POST" and request.POST["post_type"] == "db_data"):
        _ip_addr = request.POST.get('ip_addr','')
        _mac_addr = request.POST.get('mac_addr','')
        _dept = request.POST.get('dept','')
        _noted = request.POST.get('noted','')
        ipdb_rec = Ipdb.objects.get(ip_addr = _ip_addr)
        ipdb_rec.mac_addr = _mac_addr
        ipdb_rec.dept = _dept
        ipdb_rec.noted = _noted
        ipdb_rec.save()
            
    if(request.method == "POST" and request.POST["post_type"] == "vlan_data"):
        for key in vlan_data.keys():
            vlan_data[key] = request.POST.get(key,'0')
        request.session["vlan_data"] = vlan_data;

    if(request.method == "POST" and request.POST["post_type"] == "paging"):
        page_index = int(request.POST.get("page",1))
        request.session["page_index"] = page_index;
    
    if(request.method == "POST" and request.POST["post_type"] == "show_all"):
        request.session["show_all_flag"] = request.POST.get("show_all_flag","0")
        show_all_flag = request.session["show_all_flag"]
        if(show_all_flag == "1"):
            for key in vlan_data.keys():
                vlan_data[key] = '1'
        
    if(show_all_flag == "1"):
        page_length = len(Ipdb.objects.all())
        page_index = 1
    else:
        page_length = 20
    
    for key in vlan_data.keys():
        if(vlan_data[key] == '1'):
            ip_data |= Ipdb.objects.filter(vlan_id=key)
    
    ip_data = ip_data.order_by("id")
    depts_data = Dept_names.objects.order_by("dept_name")
    page_indexes = range(1,to_page_length(len(ip_data_data),page_length))
    ip_data = ip_data[(page_index-1)*page_length:(page_index*page_length)]
    return render_to_response("ipdb/ipdb.html",locals())
    
def to_page_length(data_len,page_len):     #计算当前数据数据量能分多少页
    page_size = int(data_len/page_len)+2
    if (data_len%page_len) == 0:
        page_size -= 1
    return page_size