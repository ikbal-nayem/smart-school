from rest_framework.response import Response
import random

from .serializer import (
	StudentDetailSerializer
)
from account.models import (
	Accounts,
	Student
)
from classes.models import (
	StudentAcademicInfo,
	ClassYear,
	Groups
)
from classes.api.updateOrCreate import createStudentAcademicInfo




def getUsername(first_name, last_name):
	User = Accounts
	full_name = (first_name+last_name).replace(' ', '').lower()
	if len(full_name)<=10:
		name = full_name
		while User.objects.filter(username=name).exists():
			name = full_name+str(random.choice(range(999)))
		return name

	first_name = first_name.replace(' ', '').lower()
	if len(first_name)<=10:
		name = first_name
		while User.objects.filter(username=name).exists():
			name = first_name+str(random.choice(range(999)))
		return name

	last_name = last_name.replace(' ', '').lower()
	name = last_name
	while User.objects.filter(username=name).exists():
		name = last_name+str(random.choice(range(999)))
	return name



def update_student(instance, data, context=None):
	if data.get('student_personal_info', None) and data['student_personal_info'].get('email', None):
		if instance.student_personal_info.email == data['student_personal_info']['email']:
			data['student_personal_info'].pop('email')
	if data.get('academic_info'):
		academic_info = data.pop('academic_info')
		student_instance = instance.student_personal_info
		try:
			createStudentAcademicInfo(student_instance, academic_info, action='update')
		except:
			return Response({'error': 'academic info error'})

	serializer = StudentDetailSerializer(instance, data=data, context=context, partial=True)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors)




def create_student(data):
	serializer = StudentDetailSerializer(data=data, partial=True)
	if serializer.is_valid():
		serializer.validated_data['username'] = getUsername(data['first_name'], data['last_name'])
		serializer.save()
		if data.get('academic_info'):
			academic_info = createStudentAcademicInfo(Student.objects.get(account__username=serializer.validated_data['username']), data.get('academic_info'), action='new')
			serializer.validated_data['academic_info'] = academic_info
		return Response(serializer.validated_data)
	return Response(serializer.errors)


