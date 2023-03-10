from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework import generics, status, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Todo
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer, TodoSerializer

#Viewset for Todo model
class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

#Token view for getting authentication token
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

#View for user registration
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

#View to list the available routes
@api_view(['GET'])
def getRoutes(request):
    routes = [
    '/api/token/',
    '/api/register/',
    '/api/token/refresh/'
    ]
    return Response(routes)

#Test endpoint view with GET and POST methods
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
        return Response({}, status.HTTP_400_BAD_REQUEST)