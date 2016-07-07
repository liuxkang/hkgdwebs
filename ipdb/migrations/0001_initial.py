# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-07 08:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dept_names',
            fields=[
                ('dept_name', models.CharField(max_length=20, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Ipdb',
            fields=[
                ('ip_addr', models.GenericIPAddressField(primary_key=True, serialize=False)),
                ('mac_addr', models.CharField(max_length=14, null=True)),
                ('vlan_id', models.CharField(max_length=10)),
                ('dept', models.CharField(max_length=20, null=True)),
                ('noted', models.CharField(max_length=100, null=True)),
                ('id', models.IntegerField()),
            ],
        ),
    ]
