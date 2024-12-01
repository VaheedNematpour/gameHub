from rest_framework import serializers
from .models import Category, Platform


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']
