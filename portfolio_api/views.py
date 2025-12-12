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

from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings


@csrf_exempt
def contact_view(request):
    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        # Your email message
        admin_message = f"""
New Portfolio Contact Message

Name: {name}
Email: {email}

Message:
{message}
"""

        # Send email to YOU
        send_mail(
            subject="New Contact Form Message",
            message=admin_message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
            fail_silently=False,
        )

        # Auto-reply message to USER
        autoreply_message = f"""
Hi {name},

Thank you for reaching out! I received your message:

\"{message}\"

I will get back to you soon.

Regards,
Venu Kumar
"""

        send_mail(
            subject=settings.CONTACT_AUTOREPLY_SUBJECT,
            message=autoreply_message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[email],
            fail_silently=False,
        )

        return JsonResponse({"success": True, "message": "Message sent"})

    return JsonResponse({"success": False, "error": "Invalid request"})
