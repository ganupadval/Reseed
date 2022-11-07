from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Book(models.Model):
   title = models.CharField(max_length=50)
   price= models.DecimalField(max_digits=10, decimal_places=2)
   image = models.ImageField(upload_to='product_img/', null=True)
   condition = models.CharField(max_length=30, null=True)
   seller = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
   
  
   def __str__(self):
        return self.title
        
class Subject (models.Model):
   subject = models.CharField(max_length=50)
   books = models.OneToOneField(Book, on_delete=models.CASCADE, null=True)
   def __str__(self):
        return self.subject

class Semester(models.Model):
   semester = models.CharField(max_length=5)
   subject = models.ManyToManyField(Subject, null=True)
   def __str__(self):
        return self.semester

class Branch(models.Model):
   branch = models.CharField(max_length=50)
   semester = models.ManyToManyField(Semester, null=True)
   
   def __str__(self):
        return self.branch
  

   
   



