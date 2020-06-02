from django.shortcuts import render
from django.http import HttpResponse
from .models import Playlists
from .models import UserProfile
# Create your views here.


def home (request):
    context = {
        'playlists': Playlists.objects.all()
    }
    return render(request, 'myapi/home.html', context)

def createview (request):
    return render(request, 'users/create_video.html')