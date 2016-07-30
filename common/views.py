from django.shortcuts import render_to_response
from .models import Users,Depts
# Create your views here.
def user_signin(request):
    users = Depts.objects.all()
    return render_to_response("common/user_signin.html",locals())
