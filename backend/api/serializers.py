from rest_framework import serializers
from .models import  Blog, Project


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'  

class ProjectSerializer(serializers.ModelSerializer):
    technologies = serializers.ListField(
        child=serializers.CharField(), 
        allow_empty=True, 
        required=False  
    )

    class Meta:
        model = Project
        fields = '__all__'