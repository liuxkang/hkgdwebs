from django.shortcuts import render_to_response
from .models import Rfid,It_types
from ipdb.models import Dept_names

# Create your views here.
def rfid(request):
    page_index = 1;
    page_length = 20;           #每一页的显示的数量
    if(request.method == "POST"):
        _rfid = request.POST.get('rfid','')
        _it_type = request.POST.get('it_type','')
        _sn = request.POST.get('sn','')
        _dept = request.POST.get('dept','')
        _user = request.POST.get('user','')
        _time = request.POST.get('time','1980-7-7')
        page_index = int(request.POST.get('page_index')) 
        rfid_rec = Rfid.objects.get(rfid = _rfid)
        rfid_rec.rfid = _rfid
        rfid_rec.it_type = _it_type
        rfid_rec.sn = _sn
        rfid_rec.dept = _dept
        rfid_rec.user = _user
        rfid_rec.time = _time
        rfid_rec.save()
        
    if(request.method == "GET"):
        if(request.GET.getlist("page")):
            page_index = int(request.GET["page"])
    
    rfid_data = Rfid.objects.order_by('id')
    depts_data = Dept_names.objects.order_by("dept_name")
    page_size = []
    for i in range(1,int(len(rfid_data)/page_length)+2):
        page_size.append(i)
    rfid_data = rfid_data[(page_index-1)*page_length:(page_index*page_length)]
    type_data = It_types.objects.all()
    return render_to_response("rfid/rfid.html",locals())