from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category, Platform
from .serializers import CategorySerializer, PlatformSerializer


@api_view()
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)

    return Response(serializer.data)


@api_view()
def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    serializer = CategorySerializer(category)

    return Response(serializer.data)


@api_view()
def platform_list(request):
    platforms = Platform.objects.all()
    serializer = PlatformSerializer(platforms, many=True)

    return Response(serializer.data)


@api_view()
def platform_detail(request, id):
    platform = get_object_or_404(Platform, pk=id)
    serializer = PlatformSerializer(platform)

    return Response(serializer.data)
