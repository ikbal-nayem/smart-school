from rest_framework.response import Response
import random, json

from account.api.serializer import (
	StudentDetailSerializer,
	TeacherDetailSerializer,
	StaffDetailSerializer,
	GuardianDetailSerializer,
	PictureSerializer
)
from account.models import (
	Accounts,
	Student,
	Teacher,
	Staff,
	Guardian
)
from classes.models import (
	StudentAcademicInfo,
	ClassYear,
	Groups
)
from classes.api.updateOrCreate import (
	update_StudentAcademicInfo,
	update_TeacherAcademicInfo,
	update_StaffAcademicInfo
)




def getUsername(first_name, last_name):
	User = Accounts

	full_name = (first_name+last_name).replace(' ', '').lower()
	try_number = 0
	if len(full_name)<=12:
		name = full_name
		while User.objects.filter(username=name).exists() and try_number<500:
			name = full_name+str(random.choice(range(9999)))
		if try_number<500:
			return name

	first_name = first_name.replace(' ', '').lower()
	try_number = 0
	if len(first_name)<=12:
		name = first_name
		while User.objects.filter(username=name).exists() and try_number<500:
			name = first_name+str(random.choice(range(9999)))
		if try_number<500:
			return name

	last_name = last_name.replace(' ', '').lower()
	name = last_name
	while User.objects.filter(username=name).exists():
		name = last_name+str(random.choice(range(9999)))
	return name





# 											Student

def update_student(instance, data, context=None):
	if data.get('student_personal_info'):
		if data['student_personal_info'].get('email'):
			if instance.student_personal_info.email == data['student_personal_info']['email']:
				data['student_personal_info'].pop('email')
		if data['student_personal_info'].get('guardian'):
			stu = Student.objects.get(account=instance)
			stu.guardian = Guardian.objects.get(account__username=data['student_personal_info'].pop('guardian'))
			stu.save()
	if data.get('academic_info'):
		academic_info = data.pop('academic_info')
		student_instance = instance.student_personal_info
		try:
			academic_data = update_StudentAcademicInfo(student_instance, academic_info, action='update')
		except:
			return Response({'error': 'academic info error'})

	serializer = StudentDetailSerializer(instance, data=data, context=context, partial=True)
	if serializer.is_valid():
		serializer.save()
		return Response(StudentDetailSerializer(instance).data)
	return Response(serializer.errors)



def create_student(form_data):
	data = json.loads(form_data['data'])
	data['phone_numbers'] = checkNumbers(data.pop('phone_numbers'))
	data.pop('pictures')
	serializer = StudentDetailSerializer(data=data, partial=True)
	if serializer.is_valid():
		serializer.validated_data['username'] = getUsername(data['first_name'], data['last_name'])
		serializer.save()

		student = Accounts.objects.get(username=serializer.validated_data['username'])
		student.student_personal_info.guardian = Guardian.objects.filter(account__username=data['student_personal_info'].get('guardian')).first()
		student.student_personal_info.guardian_relation = data['student_personal_info'].get('guardian_relation')
		student.student_personal_info.save()

		if data.get('academic_info'):
			academic_info = update_StudentAcademicInfo(student.student_personal_info, data.get('academic_info'), action='new')
			serializer.validated_data['academic_info'] = academic_info
		if form_data.get('picture'):	# setting picture
			pic_seri = PictureSerializer(student.pictures, data={'profile': form_data['picture']})
			if pic_seri.is_valid():
				pic_seri.save()
			else:
				print(pic_seri.errors)
		serializer.validated_data['success'] = True
		return Response(serializer.validated_data)
	return Response(serializer.errors)





# 										Teacher

def update_teacher(instance, data):
	if data.get('teacher_personal_info') and data['teacher_personal_info'].get('email', None):
		if instance.teacher_personal_info.email == data['teacher_personal_info']['email']:
			data['teacher_personal_info'].pop('email')
	serializer = TeacherDetailSerializer(instance, data=data, partial=True)
	academic_serializer = update_TeacherAcademicInfo(instance.teacher_personal_info.academic_info, data=data.get('academic_info'))
	if serializer.is_valid() and academic_serializer['is_valid']:
		serializer.save()
		serializer.validated_data['academic_info'] = academic_serializer['validated_data']
		return Response(serializer.validated_data)
	else:
		return Response(serializer.errors) if not serializer.is_valid() else Response(academic_serializer['errors'])


def create_teacher(data):
	serializer = TeacherDetailSerializer(data=data, partial=True)
	if serializer.is_valid():
		serializer.validated_data['username'] = getUsername(data['first_name'], data['last_name'])
		serializer.save()
		if data.get('academic_info'):
			academic_info = update_TeacherAcademicInfo(Teacher.objects.get(account__username=serializer.validated_data['username']), data.get('academic_info'))
			if academic_info['is_valid']:
				serializer.validated_data['academic_info'] = academic_info['validated_data']
			else:
				serializer.validated_data['academic_info'] = academic_info['errors']
		return Response(serializer.validated_data)
	return Response(serializer.errors)





# 										Staff

def update_staff(instance, data):
	if data.get('staff_personal_info') and data['staff_personal_info'].get('email', None):
		if instance.staff_personal_info.email == data['staff_personal_info']['email']:
			data['staff_personal_info'].pop('email')
	serializer = StaffDetailSerializer(instance, data=data, partial=True)
	academic_serializer = update_StaffAcademicInfo(instance.staff_personal_info.academic_info, data=data.get('academic_info'))
	if serializer.is_valid() and academic_serializer['is_valid']:
		serializer.save()
		serializer.validated_data['academic_info'] = academic_serializer['validated_data']
		return Response(serializer.validated_data)
	else:
		return Response(serializer.errors) if not serializer.is_valid() else Response(academic_serializer['errors'])


def create_staff(data):
	serializer = StaffDetailSerializer(data=data, partial=True)
	if serializer.is_valid():
		serializer.validated_data['username'] = getUsername(data['first_name'], data['last_name'])
		serializer.save()
		if data.get('academic_info'):
			academic_info = update_StaffAcademicInfo(Staff.objects.get(account__username=serializer.validated_data['username']), data.get('academic_info'))
			serializer.validated_data['academic_info'] = academic_info['validated_data'] if academic_info['is_valid'] else academic_info['errors']
		return Response(serializer.validated_data)
	return Response(serializer.errors)





# 										guardian

def update_guardian(instance, data):
	if data.get('guardian_personal_info') and data['guardian_personal_info'].get('email', None):
		if instance.guardian_personal_info.email == data['guardian_personal_info']['email']:
			data['guardian_personal_info'].pop('email')
	serializer = GuardianDetailSerializer(instance, data=data, partial=True)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.validated_data)
	return Response(serializer.errors)



def create_guardian(data):
	data['phone_numbers'] = checkNumbers(data.pop('phone_numbers'))
	serializer = GuardianDetailSerializer(data=data, partial=True)
	if serializer.is_valid():
		serializer.validated_data['username'] = getUsername(data['first_name'], data['last_name'])
		serializer.save()
		serializer.validated_data['success'] = True
		return Response(serializer.validated_data)
	return Response(serializer.errors)







def checkNumbers(number_list):
	for i, number in enumerate(number_list):
		if number['number'] == None:
			del number_list[i]
	return number_list