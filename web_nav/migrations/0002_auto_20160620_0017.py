# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-20 00:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_nav', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='web_nav',
            name='img_name',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
