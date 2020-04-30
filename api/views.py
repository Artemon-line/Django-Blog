from blog.models import Post
from rest_framework.response import Response
from rest_framework import viewsets, permissions, response
from rest_framework.renderers import JSONRenderer
from .serializers import PostSerializer
from rest_framework.views import APIView


class PostsStatsViewSet(APIView):
    """
    A view that returns the count of active posts.
    """
    serializer_class = [JSONRenderer]

    def get(self, request, format=None):
        posts = Post.objects.count()
        users = 0
        comments = 0
        likes = 0
        content = {'posts': posts, 'users': users,
                   'comments': comments, 'likes': likes}
        return Response(content)
