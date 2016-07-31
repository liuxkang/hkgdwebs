from django.db import models

class Jobs(models.Model):           #工单
    job_id = models.CharField(max_length=20,primary_key=True)            #工单号            
    title = models.CharField(max_length=30)             #稿件名
    authors = models.CharField(max_length=50)           #作者
    site_name = models.CharField(max_length=30)         #上稿媒体
    site_address = models.CharField(max_length=200)     #上稿地址
    word_count = models.IntegerField()                  #字数
    pic_count = models.IntegerField()                   #图片数
    status = models.CharField(max_length=10)            #工单状态
    privilege = models.CharField(max_length=100)        #工单权限
    def __str__(self):
        return self.job_id

