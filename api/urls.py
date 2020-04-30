from rest_framework import routers

from .api import PostViewSet, PostsStatsViewSet

router = routers.DefaultRouter()

router.register('posts', PostViewSet, 'posts')


urlpatterns = router.urls
