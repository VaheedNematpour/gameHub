from django.contrib import admin
from .models import Category, Platform, Game


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']
    list_per_page = 10
    search_fields = ['title__startswith']


@admin.register(Platform)
class PlatformAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']
    list_per_page = 10
    search_fields = ['title__startswith']


@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'category', 'score']
    list_editable = ['score']
    list_filter = ['category', 'platforms']
    list_per_page = 10
    search_fields = ['title__startswith']