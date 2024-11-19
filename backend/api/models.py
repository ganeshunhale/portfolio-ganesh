from django.db import models
from django.contrib.postgres.fields import ArrayField
from tinymce.models import HTMLField

class Blog(models.Model):
    CATEGORY_CHOICES = [
        ('AWS', 'AWS'),
        ('DOCKER', 'Docker'),
        ('GIT_GITHUB', 'Git & GitHub'),
        ('JENKINS', 'Jenkins'),
        ('KUBERNETES', 'Kubernetes'),
        ('LINUX', 'Linux'),
    ]
    
    thumbnail = models.TextField()
    date = models.DateField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    title = models.CharField(max_length=200, primary_key=True)
    content = HTMLField()

    class Meta:
        verbose_name = 'Blog'
        verbose_name_plural = 'Blogs'

    def __str__(self):
        return self.title


class Project(models.Model):
    DEV_TYPE_CHOICES = [
        ('WEB_APP', 'Web App'),
        ('MOBILE_APP', 'Mobile App'),
        ('FRONTEND', 'Frontend'),
        ('BACKEND', 'Backend'),
    ]
    
    thumbnail = models.TextField()
    title = models.CharField(max_length=200, primary_key=True)
    title_des = models.CharField(max_length=225)
    link = models.URLField()
    client = models.CharField(max_length=100)
    technologies = ArrayField(models.CharField(max_length=50), blank=True)
    dev_type = models.CharField(max_length=20, choices=DEV_TYPE_CHOICES)
    description = HTMLField()

    class Meta:
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'

    def __str__(self):
        return self.title
