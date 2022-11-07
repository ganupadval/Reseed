from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from book_admin.models import Book, Branch
from book_admin.serializer import BranchSerializer, RegisterSerializer, BookSerializer

# Create your views here.


def branch(request, format=None):
    if request.method == 'GET':
        # GET ALL Ongoing Events
        book = Branch.objects.all()
        book_serializer = BranchSerializer(book, many=True)
        return JsonResponse(book_serializer.data, safe=False)

def book(request, format=None):
    if request.method == 'GET':
        # GET ALL Ongoing Events
        book = Book.objects.all()
        book_serializer = BookSerializer(book, many=True)
        return JsonResponse(book_serializer.data, safe=False)

class RegisterAPI (APIView):
    def post(self, request): 
        data = request.data
        serializer = RegisterSerializer (data = data, partial=True)
        if not serializer.is_valid():
            return Response({
                'status': False,
                'message': serializer.errors
            }, status.HTTP_400_BAD_REQUEST)
        serializer.save()

        return Response ({'status': True, 'message': 'user created'}, status.HTTP_201_CREATED )