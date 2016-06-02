from django.shortcuts import render
from django.http import HttpResponse
from .models import Ipdb
# Create your views here.
def index(request):
    datatmp = Ipdb.objects.all()
    return render(request,'ipdb/index.html',datatmp)

