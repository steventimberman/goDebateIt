# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from location_field.models.plain import PlainLocationField
from multiselectfield import MultiSelectField

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now=True)
    city = models.CharField(max_length=40, null=True)
    location = PlainLocationField(based_fields=['city'], zoom=7)
    email = models.EmailField(max_length=60, null=True)
    image = models.ImageField(upload_to='profile_image', blank=True)
    TOPIC_CHOICES = (('Sports', 'Sports'),
                     ('Politics', 'Politics'),
                     ('Entertainment', 'Entertainment'),
                     ('Fashion', 'Fashion'),
                     ('Odd News', 'Odd News'),
                     ('Local', 'Local'),
                     ('International', 'International'),
                     ('Music', 'Music'),
                     ('Trending', 'Trending'),
                     ('Technology', 'Technology'),
                     ('Science', 'Science'),
                     ('Business', 'Business'),
                     ('Finance', 'Finance'),
                     ('Television', 'Television'),
                     ('Movies', 'Movies'),
                     ('Celebrities', 'Celebrities'),
                     ('Social Media', 'Social Media'),
                     ('Food', 'Food'),
                     ('Health', 'Health'),
                     ('Nature', 'Nature'),
                     ('Kids', 'Kids'),
                     ('Breaking News', 'Breaking News'),
                     ('Travel', 'Travel'),
                     ('Substances', 'Substances'),
                     ('United States', 'United States'),
                     ('Animals', 'Animals'),
                     ('Art', 'Art'),
                     ('Education', 'Education'),
                     ('Employment', 'Employment'),
                     ('Brands', 'Brands')
                     )
    favorite_topics = MultiSelectField(choices=TOPIC_CHOICES, default=(('Odd News', 'Odd News')))
