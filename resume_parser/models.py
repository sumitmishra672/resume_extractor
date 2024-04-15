from django.db import models

# Create your models here.
class Resume(models.Model):
    file = models.FileField(upload_to='resumes/')
    email = models.EmailField(null=True, blank=True)
    contact_number = models.CharField(max_length=15, null=True, blank=True)
    overall_text = models.TextField(null=True, blank=True)

