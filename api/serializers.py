from rest_framework import serializers

from blog.models import Post


class PostSerializer(serializers.ModelSerializer):
    # get field name
    author = serializers.CharField(source='author.username', read_only=True)

    class Meta:
        model = Post
        # fields = '__all__'
        fields = ['title',
                  'author',
                  'content',
                  'date_posted']
