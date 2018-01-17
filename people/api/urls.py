from django.conf.urls import url
from django.contrib import admin
from people.api.views import (
    UserProfileListAPIView,
    UserProfileDetailAPIView,
    UserProfileEditAPIView,
    UserProfileDeleteAPIView
)

urlpatterns = [
    url(r'^$', UserProfileListAPIView.as_view(), name='debate-list'),
    url(r'^(?P<pk>\d+)/$', UserProfileDetailAPIView.as_view(), name='debate-list'),
    url(r'^(?P<pk>\d+)/edit/$', UserProfileEditAPIView.as_view(), name='debate-update'),
    url(r'^(?P<pk>\d+)/delete/$', UserProfileDeleteAPIView.as_view(), name='debate-delete')

]