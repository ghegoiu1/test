from rest_framework import serializers
from .models import Tuple

class TupleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tuple
		field = ('id', 'number')

#Here we create a TupleSerializer class to process our Tuples to a format readable by JSON