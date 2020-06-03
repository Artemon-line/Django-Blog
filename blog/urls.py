from django.urls import path, include
from rest_framework import routers
from . import views
from django.conf.urls import url
from blog.api.api import PostViewSet, PostsStatsView

router = routers.DefaultRouter()

router.register('posts', PostViewSet, 'posts')

urlpatterns = [
    path('', views.home, name='blog-home'),
    path('about/', views.about, name='blog-about'),
    url('stats', PostsStatsView.as_view())
    
]+ router.urls
