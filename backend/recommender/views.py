from django.shortcuts import render
import pickle
import numpy as np
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
popular_df = pickle.load(open('D:\Ganesh-Projects\REACT\Reseed\Reseed/backend/recommender\popular.pkl','rb'))
pt = pickle.load(open('D:\Ganesh-Projects\REACT\Reseed\Reseed/backend/recommender\pt.pkl','rb'))
books = pickle.load(open('D:\Ganesh-Projects\REACT\Reseed\Reseed/backend/recommender/books.pkl','rb'))
similarity_scores = pickle.load(open('D:\Ganesh-Projects\REACT\Reseed\Reseed/backend/recommender\similarity_scores.pkl','rb'))
# Create your views here.

@csrf_exempt
def recommend(request, format=None):
    if request.method=='POST':
        request_data = JSONParser().parse(request)
        user_input = request_data.get('user_input')
        index = np.where(pt.index == user_input)[0][0]
        similar_items = sorted(list(enumerate(similarity_scores[index])), key=lambda x: x[1], reverse=True)[1:5]

        data = []
        for i in similar_items:
                item = {}
                temp_df = books[books['Book-Title'] == pt.index[i[0]]]
                item['title'] = temp_df['Book-Title'].values[0]
                item['author'] = temp_df['Book-Author'].values[0]
                item['image_url'] = temp_df['Image-URL-M'].values[0]

                data.append(item)
    
    return JsonResponse(data, safe=False)

@api_view(['GET'])
def index(request):
    books = [
        {
            'title': book['Book-Title'],
            'author': book['Book-Author'],
            'image_url': book['Image-URL-M'],
            'avg_rating': book['avg_rating'],
            'num_ratings': book['num_ratings']
        }
        for book in popular_df.to_dict(orient='records')
    ]
    return JsonResponse(books, safe=False)