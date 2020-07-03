import datetime
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response

from account.models import (
	Accounts,
)
from .serializer import (
	AccountListSerializer,
	StudentDetailSerializer,
	TeacherDetailSerializer,
	StaffDetailSerializer,
	GardianDetailSerializer
)
from .updateOrCreate import (
	update_student,
	create_student
)


class AccountSerilizerView(ViewSet):


	def list(self, request, account_type):
		queryset = queryset = Accounts.objects.filter(account_type=account_type)
		context = {'request': request}
		if account_type == 'student':
			year = request.GET.get('year') or datetime.date.today().year
			try:
				int(year)
			except:
				return Response({'error': 'invalid value for year'})
			queryset = queryset.filter(student_personal_info__academic_info__session=year)
			context['year'] = year
		elif account_type == 'teacher':
			status = request.GET.get('status') or 'present'
			if status == 'present':
				queryset = queryset.filter(leaveinfo__is_left=False)
			else:
				queryset = queryset.filter(leaveinfo__is_left=True) if status == 'quit' else queryset.filter()
		elif account_type == 'staff':
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
				serialized = TeacherDetailSerializer(queryset[0])
			elif account_type == 'staff':
				serialized = StaffDetailSerializer(queryset[0])
			elif account_type == 'gardian':
				serialized = GardianDetailSerializer(queryset[0])
			else:
				serialized.data['error'] = 'account not found'
			return Response(serialized.data)
		else:
			return Response({'error': 'account not found'})



	def update(self, request, account_type, username):
		queryset = Accounts.objects.filter(username=username, account_type=account_type)
		if queryset.exists():
			if account_type == 'student':
				return update_student(queryset.first(), request.data, context={'request': request})
		return Response({'error': 'account not found'})



	def create(self, request, account_type):
		if account_type == 'student':
			return create_student(request.data)






