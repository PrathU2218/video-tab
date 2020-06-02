from django.db import models
from django.contrib.auth.models import User   



class UserProfile(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    name=models.CharField(max_length=100)
    email=models.EmailField()
    password=models.CharField(max_length=100)
    isTeacher=models.BooleanField()
    views=models.IntegerField()
    experience=[]
    exams_completed=[]
    


class Playlists(models.Model):
    creator=models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="created_playlists")
    viewed_by=models.ManyToManyField(UserProfile, related_name="viewed_playlists")
    name=models.CharField(max_length=100)
    size=models.IntegerField()
    Tags=models.CharField(max_length=100)

    def __str__(self):
        return self.name
    

class Comments(models.Model):
    Poster= models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    text= models.CharField(max_length=100)
    replies=[]

class Video(models.Model): 

    video= models.CharField(max_length=100)
    subtitle= models.CharField(max_length=100)
    title= models.CharField(max_length=100)
    upvotes= models.IntegerField()
    comments= models.ForeignKey(Comments, on_delete=models.CASCADE)
    views=models.IntegerField()
    


class Exam(models.Model):
    no_of_questions=models.IntegerField()
    questions=[]
    duration= models.DurationField()

class Question:
    question= models.CharField(max_length=100)
    options=[]


