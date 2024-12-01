from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category, Platform, Game
from .serializers import CategorySerializer, PlatformSerializer, GameSerializer, CreateGameSerializer


@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)

        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE'])
def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    if request.method == 'GET':
        serializer = CategorySerializer(category)

        return Response(serializer.data)
    elif request.method == 'DELETE':
        if category.game_set.count() > 0:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
        category.delete()

        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET', 'POST'])
def platform_list(request):
    if request.method == 'GET':
        platforms = Platform.objects.all()
        serializer = PlatformSerializer(platforms, many=True)

        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PlatformSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETe'])
def platform_detail(request, id):
    platform = get_object_or_404(Platform, pk=id)
    if request.method == 'GET':
        serializer = PlatformSerializer(platform)

        return Response(serializer.data)
    elif request.method == 'DELETE':
        if platform.game_set.count() > 0:
            return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
        platform.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def game_list(request):
    if request.method == 'GET':
        games = Game.objects.prefetch_related('platforms').select_related('category').all()
        serializer = GameSerializer(games, many=True)

        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CreateGameSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE'])
def game_detail(request, id):
    game = get_object_or_404(Game, pk=id)
    if request.method == 'GET':
        serializer = GameSerializer(game)

        return Response(serializer.data)
    elif request.method == 'DELETE':
        game.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
