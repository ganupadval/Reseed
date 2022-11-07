from django.urls import path
from . import views

urlpatterns=[
    
    path('books/', views.book),
    path('branch/', views.branch),
    path('register/', views.RegisterAPI.as_view())
    ]

