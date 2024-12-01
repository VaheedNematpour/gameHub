from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category, Platform, Game
from .serializers import CategorySerializer, PlatformSerializer, GameSerializer


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


@api_view()
def game_list(request):
    games = Game.objects.prefetch_related('platfroms').select_related('category').all()
    serializer = GameSerializer(games, many=True)

    return Response(serializer.data)


@api_view()
def game_detail(request, id):
    game = get_object_or_404(Game, pk=id)
    serializer = GameSerializer(game)

    return Response(serializer.data)
