from django.urls import path
from . import views
from django.shortcuts import render

urlpatterns = [
     path('', views.index, name='index'),  # This handles both GET and POST
    path('success/', views.success, name='success'),
    path('about/', views.about, name='about'),
    path('projects/', views.projects, name='projects'),
]
