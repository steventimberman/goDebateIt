from rest_framework import serializers

from django.contrib.auth.models import User
from people.models import UserProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'user',
            'timestamp',
            'location',
            'email',
            'image',
            'favorite_topics',
        ]