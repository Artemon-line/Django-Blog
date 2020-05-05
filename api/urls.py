from rest_framework import routers
from django.urls import path, include
from . import views
from django.conf.urls import url


from .api import PostViewSet, PostsStatsView

router = routers.DefaultRouter()

router.register('posts', PostViewSet, 'posts')


urlpatterns = [
    url('stats', PostsStatsView.as_view())] + router.urls
