from rest_framework import serializers
from .models import Category, Platform, Game


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']


class PlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = ['id', 'title']


class GameSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    platforms = PlatformSerializer(many=True)

    class Meta:
        model = Game
        fields = ['id', 'title', 'category', 'platforms']
