from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=20)
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    content = models.CharField(max_length=255)
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title


class Stats(models.Model):
    posts = models.IntegerField
    users = models.IntegerField
    comments = models.IntegerField
    likes = models.IntegerField

    def __str__(self):
        return self.posts
