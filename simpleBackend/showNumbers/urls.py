from django.conf.urls import patterns, include, url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
	
	url(r'^api/post/$', views.posted, name='posted'),
    url(r'^$', views.index, name='index'),	#If nothing, point to index function of Views.py
    url(r'^api/$', views.TupleList.as_view()),	#If 'api/' point to TupleList.as_view() function to show all Tuples in database 
    url(r'^api/(?P<pk>[0-9]+)/$', views.TupleDetail.as_view())	# If 'api/3' (or any number) point to TupleDetail.as_view() to show 
    														# what index Tuple is held by selected index
    #Insert urls here to point to number views
]

urlpatterns = format_suffix_patterns(urlpatterns)