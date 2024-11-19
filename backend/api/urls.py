from django.urls import path
from .views import (
   
 
    BlogListView, 
    BlogDetailView,
    ProjectListView,
    ProjectDetailView
)

urlpatterns = [
    path('blogs/', BlogListView.as_view()),
    path('blog/<slug:pk>', BlogDetailView.as_view()),
    # path('blogs/<int:pk>/', BlogDetailView.as_view(), name='blog-detail'),
    path('projects/', ProjectListView.as_view()),
    path('project/<slug:pk>', ProjectDetailView.as_view()),
    # path('projects/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
]
