from django.contrib import admin

from .models import UserProfile, Comments, Playlists, Video, Exam

admin.site.register(UserProfile)
admin.site.register(Comments)
admin.site.register(Playlists)
admin.site.register(Video)
admin.site.register(Exam)

