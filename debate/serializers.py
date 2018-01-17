from rest_framework import serializers
from debate.models import Debate

class DebateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Debate
        fields = ('id', 'title', 'author', 'description', 'date')

    def create(self, validated_data):
        title = validated_data.get('title', None)
        user = self.context.get("user")
        description = validated_data.get('description', None)
        date = validated_data.get('date', None)
        return Debate.objects.create(title=title, author=user, description=description, date=date)