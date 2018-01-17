# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status, generics

from debate.models import Debate
from debate.serializers import DebateSerializer

def debate(request, debate_id):
    return render(request, 'MyTemplates/debate.html', {'id': debate_id})

class DebateList(generics.ListCreateAPIView):
    queryset = Debate.objects.all()
    serializer_class = DebateSerializer

    def get(self, request, format=None):
        debate = Debate.objects.all().order_by('-date')
        serializer = DebateSerializer(debate, many=True)
        return Response(serializer.data)

    @permission_classes((IsAdminUser, ))
    def debate(self, request, format=None):
        user = request.user
        serializer = DebateSerializer(data=request.data, context={'user':user})
        if serializer.isValid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

class DebateDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Debate.objects.all()
    serializer_class = DebateSerializer