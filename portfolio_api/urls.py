from django.urls import path
from . import views


urlpatterns = [
    path("", views.home,name="home"),
    path("project1/", views.project1,name="project1"),
    path("project2/", views.project2,name="project2"),
    path("project3/", views.project3,name="project3"),
    path("project4/", views.project4,name="project4"),
]