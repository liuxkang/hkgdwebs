"""hkgdwebs URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from django.contrib import admin
import ipdb.views
import web_nav.views
import rfid.views
import news_report.views
import common.views
urlpatterns = [
    url(r'^$',web_nav.views.web_nav,name="index"),
    url(r'^admin/',admin.site.urls),
    url(r'^ipdb/',ipdb.views.ipdb,name="ipdb"),
    url(r'^rfid/',rfid.views.rfid,name="rfid"),
    url(r'news_report/',news_report.views.news_report,name="news_report"),
    url(r'user_signin/',common.views.user_signin,name="user_signin"),
    url(r'news_add_job/',news_report.views.add_job,name="news_add_job"),
    url(r'^test/',web_nav.views.test,name="test"),
]
