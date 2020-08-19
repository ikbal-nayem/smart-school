import datetime
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from classes.models import (
	ClassYear,
	Shifts
)
from classes.api.serializer import (
	ClassesSerializer,
	ClassesDetailSerializer,
	StudentFormSerializer
)




class ClassesView(ViewSet):

	def classList(self, request):
		year = request.GET.get('year') or datetime.date.today().year
		if year == 'all':
			queryset = ClassYear.objects.all().order_by('-year')
		else:
			queryset = ClassYear.objects.filter(year=year)
		serializer = ClassesSerializer(queryset, many=True)
		return Response(serializer.data)


	def classInfo(self, request, class_code):
		year = request.GET.get('year') or datetime.date.today().year
		if year == 'all':
			queryset = ClassYear.objects.filter(class_code__code=class_code)
		else:
			queryset = ClassYear.objects.filter(class_code__code=class_code, year=year)
		serializer = ClassesDetailSerializer(queryset, many=True)
		return Response(serializer.data)



class ClassFormView(ViewSet):

	def studentForm(self, request):
		queryset = Shifts.objects.all()
		serializer = StudentFormSerializer(queryset)
		return Response(serializer.data)