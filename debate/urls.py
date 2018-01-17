from django.conf.urls import *
from rest_framework.urlpatterns import format_suffix_patterns
from debate import views
from debate.views import debate

from . import views

urlpatterns = [
    url(r'^(?P<debate_id>\d+)/$', debate),
    url(r'^api/$', views.DebateList.as_view()),
    url(r'^api/(?P<pk>[0-9]+)$', views.DebateDetail.as_view()),


]

urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])