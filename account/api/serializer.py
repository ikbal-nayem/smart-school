import datetime
from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer


from classes.api.serializer import (
	StudentAcademicInfoSerializer,
	TeacherAcademicInfoSerializer,
	StaffAcademicInfoSerializer
)
from account.models import (
	Accounts,
	Student,
	Teacher,
	Staff,
	Gardian,
	Pictures,
	PhoneBook
)


# 											picture
class PictureSerializer(serializers.ModelSerializer):
	thumbnail = serializers.ImageField(read_only=True)
	class Meta:
		model = Pictures
		fields = ['profile', 'thumbnail']


# 											phone numbers

class PhoneBook(serializers.ModelSerializer):
	class Meta:
		model = PhoneBook
		fields = ['id', 'number']



# 										account list

class AccountListSerializer(serializers.ModelSerializer):
	pictures = PictureSerializer(read_only=True)
	academic_info = serializers.SerializerMethodField()
	class Meta:
		model = Accounts
		fields = ['username', 'first_name', 'last_name', 'account_type', 'academic_info', 'pictures']

	def get_academic_info(self, obj):
		if obj.account_type == 'student':
			stu = obj.student_personal_info.academic_info.filter(session=self.context['year']).order_by('-session')
			if stu.exists():
				return StudentAcademicInfoSerializer(stu.first()).data
		elif obj.account_type == 'teacher':
			return TeacherAcademicInfoSerializer(obj.teacher_personal_info.academic_info).data
		elif obj.account_type =='staff':
			return StaffAcademicInfoSerializer(obj.staff_personal_info.academic_info).data
		else:
			li = []
			for stu in obj.gardian_personal_info.student.all():
				li.append({'username': stu.account.username, 'first_name': stu.account.first_name, 'last_name':stu.account.last_name})
			return {'students': li}






class TeacherSerializer(serializers.ModelSerializer):
	class Meta:
		model = Teacher
		exclude = ['account', '_created', '_updated']

class StaffSerializer(serializers.ModelSerializer):
	class Meta:
		model = Staff
		exclude = ['account', '_created', '_updated']

class GardianSerializer(serializers.ModelSerializer):
	class Meta:
		model = Gardian
		exclude = ['account', '_created', '_updated']

class StudentSerializer(serializers.ModelSerializer):
	gardian = serializers.SerializerMethodField(read_only=True)
	class Meta:
		model = Student
		exclude = ['account', '_created', '_updated']

	def get_gardian(self, obj):
		try:
			if obj.gardian:
				return {
					'name': obj.gardian.__str__(),
					'username': obj.gardian.account.username,
					'phone_numbers': obj.gardian.account.phone_numbers.all()
					}
		except:
			return None





# 												student detail

class StudentDetailSerializer(WritableNestedModelSerializer):
	student_personal_info = StudentSerializer(partial=True)
	academic_info = serializers.SerializerMethodField()
	pictures = PictureSerializer(allow_null=True)
	phone_numbers = PhoneBook(many=True)
	is_left = serializers.SerializerMethodField()
	class Meta:
		model = Accounts
		fields = ['username', 'first_name', 'last_name', 'account_type', 'is_left', 'student_personal_info', 'academic_info', 'pictures', 'phone_numbers']
		read_only_fields = ['username', 'is_left']

	def get_is_left(self, obj):
		return obj.leaveinfo.is_left

	def get_academic_info(self, obj):
		class_list, session_list, academic_info = [], [], {}
		all_class = obj.student_personal_info.academic_info.all().order_by('-session')
		try:
			class_code = self.context['request'].GET.get('class') or all_class.first().class_id.class_code.code
		except:
			return None
		for classes in all_class:
			class_list.append(classes.class_id.class_code.code)
			session_list.append(classes.session)
		class_info = StudentAcademicInfoSerializer(all_class.filter(class_id__class_code__code=class_code), many=True).data
		academic_info['class_list'], academic_info['session_list'] = class_list, session_list
		academic_info['class_info'] = class_info
		return academic_info




# 												teacher detail

class TeacherDetailSerializer(WritableNestedModelSerializer):
	teacher_personal_info = TeacherSerializer()
	academic_info = serializers.SerializerMethodField()
	pictures = PictureSerializer()
	phone_numbers = PhoneBook(many=True)
	is_left = serializers.SerializerMethodField()
	class Meta:
		model = Accounts
		fields = ['username', 'first_name', 'last_name', 'account_type', 'is_left', 'teacher_personal_info', 'academic_info', 'pictures', 'phone_numbers']
		read_only_fields = ['username', 'is_left']

	def get_is_left(self, obj):
		return obj.leaveinfo.is_left

	def get_academic_info(self, obj):
		return TeacherAcademicInfoSerializer(obj.teacher_personal_info.academic_info).data




# 												staff detail

class StaffDetailSerializer(WritableNestedModelSerializer):
	staff_personal_info = StaffSerializer()
	academic_info = serializers.SerializerMethodField()
	pictures = PictureSerializer()
	phone_numbers = PhoneBook(many=True)
	is_left = serializers.SerializerMethodField()
	class Meta:
		model = Accounts
		fields = ['username', 'first_name', 'last_name', 'account_type', 'is_left', 'staff_personal_info', 'academic_info', 'pictures', 'phone_numbers']
		read_only_fields = ['username', 'is_left']

	def get_is_left(self, obj):
		return obj.leaveinfo.is_left

	def get_academic_info(self, obj):
		return StaffAcademicInfoSerializer(obj.staff_personal_info.academic_info).data




# 												Gardian detail

class GardianDetailSerializer(WritableNestedModelSerializer):
	gardian_personal_info = GardianSerializer()
	pictures = PictureSerializer()
	phone_numbers = PhoneBook(many=True)
	is_left = serializers.SerializerMethodField()
	class Meta:
		model = Accounts
		fields = ['username', 'first_name', 'last_name', 'account_type', 'is_left', 'gardian_personal_info', 'pictures', 'phone_numbers']
		read_only_fields = ['username', 'is_left']

	def get_academic_info(self, obj):
		li = []
		for stu in obj.gardian_personal_info.student.all():
			li.append({'username': stu.account.username, 'first_name': stu.account.first_name, 'last_name':stu.account.last_name})
		return {'students': li}