from blog.models import Post
from rest_framework.response import Response
from rest_framework import viewsets, permissions, response
from rest_framework.renderers import JSONRenderer
from .serializers import PostSerializer
from rest_framework.views import APIView
from django.contrib.auth.models import User


# Post Viewset


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PostSerializer


class PostsStatsView(APIView):
    """
    A view that returns the count of active posts.
    """
    def get(self, request):
        posts = Post.objects.count()
        users = User.objects.count()
        comments = 0
        likes = 0
        content = {'posts': posts, 'users': users,
                   'comments': comments, 'likes': likes}
        return Response(content)
