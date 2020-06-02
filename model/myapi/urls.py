from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='myapi-home'),
    path('create/', views.createview, name='create-view'),
]