from django.contrib import admin
from .models import Blog, Project
from tinymce.widgets import TinyMCE
from django import forms

class BlogAdminForm(forms.ModelForm):
    class Meta:
        model = Blog
        fields = '__all__'
        widgets = {
            'content': TinyMCE(attrs={'cols': 80, 'rows': 40}),
            'thumbnail': forms.TextInput(),
            'category': forms.Select(),
            'title': forms.TextInput(),
        }

class ProjectAdminForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = '__all__'
        widgets = {
            'description': TinyMCE(attrs={'cols': 80, 'rows': 40}),
            'thumbnail': forms.TextInput(),
            'link': forms.URLInput(),
            'client': forms.TextInput(),
            'technologies': forms.TextInput(),  # This can be improved with custom widget
            'dev_type': forms.Select(),
            'title': forms.TextInput(),
        }

    def clean_technologies(self):
        technologies = self.cleaned_data.get('technologies', '')
        if isinstance(technologies, str):
            # Assuming technologies are entered as comma-separated values, e.g., "Python, Django"
            return [tech.strip() for tech in technologies.split(',')]
        return technologies

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    form = BlogAdminForm
    list_display = ('title', 'category', 'date')
    search_fields = ('title', 'category')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    form = ProjectAdminForm
    list_display = ('title', 'client', 'dev_type', 'link')
    search_fields = ('title', 'client')
