from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "index.html")

    
def project1(request):
    return render(request, "project1.html")

def project2(request):
    return render(request, "project2.html")

def project3(request):
    return render(request, "project3.html")

def project4(request):
    return render(request, "project4.html")