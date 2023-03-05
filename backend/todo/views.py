
from django.shortcuts import render
from rest_framework import viewsets     
from rest_framework.decorators import api_view
from rest_framework.response import Response   
from django.http import JsonResponse
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import generics 
from .serializers import TodoSerializer      
from .models import Todo                     
        
class TodoView(viewsets.ModelViewSet):       
  serializer_class = TodoSerializer          
  queryset = Todo.objects.all()           

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)  