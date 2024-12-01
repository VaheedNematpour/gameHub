from django.urls import path
from . import views


urlpatterns = [
    # Category
    path('categories/', views.category_list),
    path('categories/<int:id>/', views.category_detail),

    # Platform
    path('platforms/', views.platform_list),
    path('platforms/<int:id>/', views.platform_detail),

    # game
    path('list/', views.game_list),
    path('list/<int:id>/', views.game_detail)
]

