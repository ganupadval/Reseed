from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Form(models.Model):
   user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
   email = models.EmailField()
   phone_number = models.CharField(max_length=12)
   title = models.CharField(max_length = 50, null=True)
   branch = models.CharField(max_length = 30)
   semester = models.CharField(max_length = 5, null=True)
   subject = models.CharField(max_length=50, null=True)
   image = models.ImageField(upload_to='bookimg/',null=True)
   condition = models.CharField(max_length=30, null=True)
   ammount= models.DecimalField(max_digits=10,null=True, decimal_places=2)
   transaction_img = models.ImageField(upload_to='transaction/')

   def __str__(self):
      return self.user