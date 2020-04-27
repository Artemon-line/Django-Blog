from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

posts = [
    {
        'author': 'ArtemyH',
        'title': 'Fisrt Blog Post 1',
        'content': 'First post content',
        'date_posted': 'April 27, 2020'
    },
        {
        'author': 'Jonathan H',
        'title': 'Blog Post 2',
        'content': 'Second post content',
        'date_posted': 'April 27, 2020'
    }
]

def home(request):
    context = {
        'posts': posts
    }
    return render(request, 'blog/index.html', context)


def about(request):
    return render(request, 'blog/about.html', {'title': 'About'})
