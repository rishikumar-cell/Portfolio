from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages

def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        full_message = f"From: {name} <{email}>\n\nMessage:\n{message}"
        try:
            send_mail(
                subject,
                full_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_EMAIL],
                fail_silently=False,
            )
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('success')  # redirect to the named URL 'success'
        except:
            messages.error(request, 'There was an error sending your message. Please try again later.')

    return render(request, 'index.html')  # show form again if GET or failure

def success(request):
    return render(request, 'success.html')

def about(request):
    return render(request, 'about.html')

def projects(request):
    return render(request, 'projects.html')
