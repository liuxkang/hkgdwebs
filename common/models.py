from django.db import models

# Create your models here.
class Depts(models.Model):
    dept_name = models.CharField(max_length=20,primary_key=True)
    def __str__(self):
        return self.dept_name
        
class Users(models.Model):
    name = models.CharField(max_length=20)
    password = models.CharField(max_length=20)                  #密码
    dept = models.CharField(max_length=20,null=True)            #工作部门
    work_id = models.CharField(max_length=20,null=True)         #工号
    pki_id = models.CharField(max_length=50,null=True)          #pki账号
    id_card = models.CharField(max_length=20,null=True)         #身份证号
    phone = models.CharField(max_length=20,null=True)           #电话号码
    user_auth = models.CharField(max_length=200)                #用户权限
    def __str__(self):
        return self.name
