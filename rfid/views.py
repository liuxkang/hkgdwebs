from django.shortcuts import render_to_response
from .models import Rfid,It_types
from ipdb.models import Dept_names

# Create your views here.
def rfid(request):
    page_length = 20;           #每一页的显示的数量
    page_index = int(request.session.get("page_index","1"))
    if(request.method == "POST"):
        _rfid = request.POST.get('rfid','')
        _it_type = request.POST.get('it_type','')
        _sn = request.POST.get('sn','')
        _dept = request.POST.get('dept','')
        _user = request.POST.get('user','')
        _time = request.POST.get('time','1980-7-7')
        rfid_rec = Rfid.objects.get(rfid = _rfid)
        rfid_rec.rfid = _rfid
        rfid_rec.it_type = _it_type
        rfid_rec.sn = _sn
        rfid_rec.dept = _dept
        rfid_rec.user = _user
        rfid_rec.time = _time
        rfid_rec.save()
        
    if(request.method == "GET"):
        page_index = int(request.GET.get("page_index","1"))
        request.session["page_index"] = page_index
    
    rfid_data = Rfid.objects.order_by('id')
    depts_data = Dept_names.objects.order_by("dept_name")
    page_indexes = range(1,to_page_length(len(rfid),page_length))
    test = to_page_length(len(rfid),page_length)
    rfid_data = rfid_data[(page_index-1)*page_length:(page_index*page_length)]
    type_data = It_types.objects.all()
    return render_to_response("rfid/rfid.html",locals())

def to_page_length(data_len,page_len):     #计算当前数据数据量能分多少页
    page_size = int(data_len/page_len)
    if (data_len%page_len) == 0:
        page_size += 1
    return page_size