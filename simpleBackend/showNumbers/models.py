from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Tuple(models.Model):
	number = models.IntegerField();
	def __str__(self):
		return str(self.number)

#Create a class Tuple to represent the table that we're creating inside the database
#number is the only field, and its type is IntegerField
#The last part represents the function that returns a string of the number to be processed by further functions 