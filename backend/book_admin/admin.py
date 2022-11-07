from django.contrib import admin

# Register your models here.
from .models import Book, Branch, Semester, Subject

admin.site.register(Book)
admin.site.register(Branch)
admin.site.register(Semester)
admin.site.register(Subject)
