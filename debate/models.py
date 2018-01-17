# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

class Debate(models.Model):
    title = models.CharField(max_length=150, null =True, blank=True)
    description = models.CharField(max_length=150, null =True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, null=True, blank=True)
