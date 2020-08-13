import datetime
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response

from account.models import (
	Accounts,
	LeaveInfo
)
from account.api.serializer import (
	AccountListSerializer,
	StudentDetailSerializer,
	TeacherDetailSerializer,
	StaffDetailSerializer,
	GuardianDetailSerializer,
	LeaveInfoSerializer
)
from account.api.updateOrCreate import (
	update_student,
	update_teacher,
	update_staff,
	update_guardian,
	create_student,
	create_teacher,
	create_staff,
	create_guardian
)
from classes.api.serializer import TeacherAcademicInfoSerializer


class AccountSerilizerView(ViewSet):


	def list(self, request, account_type):
		queryset = Accounts.objects.filter(account_type=account_type)
		context = {'request': request}

		if account_type == 'student':			#student
			year = request.GET.get('year') or datetime.date.today().year
			class_code = request.GET.get('class') or 'all'
			try:
				int(year)
			except:
				return Response({'error': 'invalid value for year'})
			if class_code == 'all':
				queryset = queryset.filter(student_personal_info__academic_info__session=year)
			else:
				queryset = queryset.filter(student_personal_info__academic_info__session=year, student_personal_info__academic_info__class_id__class_code=class_code)
			context['year'] = year

		elif account_type == 'teacher':			#teacher
			status = request.GET.get('status') or 'present'
			if status == 'present':
				queryset = queryset.filter(leaveinfo__is_left=False)
			else:
				queryset = queryset.filter(leaveinfo__is_left=True) if status == 'quit' else queryset.filter()

		elif account_type == 'staff':			#staff
			status = request.GET.get('status') or 'present'
			if status == 'present':
				queryset = queryset.filter(leaveinfo__is_left=False)
			else:
				queryset = queryset.filter(leaveinfo__is_left=True) if status == 'quit' else queryset.filter()

		serialized = AccountListSerializer(queryset, many=True, context=context)
		return Response(serialized.data)



	def retrieve(self, request, account_type, username):
		queryset = Accounts.objects.filter(username=username, account_type=account_type)
		if queryset.exists():
			if account_type == 'student':
				serialized = StudentDetailSerializer(queryset[0], context={'request': request})
			elif account_type == 'teacher':
				serialized = TeacherDetailSerializer(queryset[0], context={'request': request})
			elif account_type == 'staff':
				serialized = StaffDetailSerializer(queryset[0], context={'request': request})
			elif account_type == 'guardian':
				serialized = GuardianDetailSerializer(queryset[0], context={'request': request})
			return Response(serialized.data)
		else:
			return Response({'error': 'account not found'})



	def update(self, request, account_type, username):
		queryset = Accounts.objects.filter(username=username, account_type=account_type)
		if queryset.exists():
			if account_type == 'student':
				return update_student(queryset.first(), data=request.data)

			elif account_type == 'teacher':
				return update_teacher(queryset.first(), data=request.data)

			elif account_type == 'staff':
				return update_staff(queryset.first(), data=request.data)

			elif account_type == 'guardian':
				return update_guardian(queryset.first(), data=request.data)
		return Response({'error': 'account not found'})



	def create(self, request, account_type):
		if account_type == 'student':
			return create_student(request.data)
		elif account_type == 'teacher':
			return create_teacher(request.data)
		elif account_type == 'staff':
			return create_staff(request.data)
		elif account_type == 'guardian':
			return create_guardian(request.data)
		else:
			return Response({'error': 'Invalid account-type'})



	def destroy(self, request, account_type, username):
		account = Accounts.objects.filter(username=username)
		if account.exists():
			account.first().delete()
			return Response({'success': True})
		return Response({'success': False, 'error': 'Account does not exists.'})





class LeaveInfoView(ViewSet):

	def retrieve(self, request, account_type, username):
		queryset = LeaveInfo.objects.get(account__username=username)
		serializer = LeaveInfoSerializer(queryset)
		return Response(serializer.data)

	def update(self, request, account_type, username):
		obj = LeaveInfo.objects.get(account__username=username)
		serializer = LeaveInfoSerializer(obj, request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.validated_data)
		return Response(serializer.errors)
