from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
#imports for RestFramework
from rest_framework import generics
from .serializers import TupleSerializer

from .models import Tuple
import json

def index(request): #Processes a request and returns a simple HttpResponse for index page
    return HttpResponse("Hello, world. You're at the showNumbers index.")

class TupleList(generics.ListCreateAPIView):	#Creates a TupleList class that has all objects in the tuple table in the database
	queryset = Tuple.objects.all()				#Listed in Rest Framework fashion
	serializer_class = TupleSerializer

class TupleDetail(generics.RetrieveUpdateDestroyAPIView):	#Different kind of view, instead of listing everything only lists details
	queryset = Tuple.objects.all()							#For one object in the database at the time
	serializer_class = TupleSerializer

@csrf_exempt
def posted(request):
	received_json_data = json.loads(request.body)
	newNumber = received_json_data['newNo']
	newID = received_json_data['tupleID'] + 1
	new_entry = Tuple(id = newID,number= newNumber)
	new_entry.save()
	return HttpResponse(received_json_data)
