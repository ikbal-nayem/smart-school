from django.db import models
from account.models import Student, Teacher, Staff
import datetime



class Groups(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name



class Shifts(models.Model):
	name = models.CharField(max_length=100)
	start_time = models.TimeField()
	end_time = models.TimeField()
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.name



# 									class list

class ClassList(models.Model):
	CLASS_CODE = (('i','i'), ('ii', 'ii'), ('iii','iii'), ('iv','iv'), ('v','v'), ('vi','vi'), ('vii','vii'), ('viii','viii'), ('ix','ix'), ('x','x'), ('xi','xi'), ('xii','xii'))
	code = models.CharField(choices=CLASS_CODE, max_length=4, primary_key=True)
	name = models.CharField(max_length=50)

	def __str__(self):
		return f'{self.code}'



# 									subject list

class SubjectList(models.Model):
	code = models.CharField(max_length=50, unique=True)
	name = models.CharField(max_length=255)
	terget_class = models.ManyToManyField(ClassList, related_name='subject_list')
	discription = models.TextField(null=True, blank=True)
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.code



# 									year-wise class

class ClassYear(models.Model):
	class ATTENDANCE_TYPE(models.TextChoices):
		Per_day = 'per day'
		Per_class = 'per class'
	class_code = models.ForeignKey(ClassList, on_delete=models.CASCADE, related_name='class_year')
	has_group = models.BooleanField(default=False)
	shift = models.ForeignKey(Shifts, on_delete=models.CASCADE, related_name='class_year')
	attendance_type = models.CharField(max_length=10, choices=ATTENDANCE_TYPE.choices, default='per day')
	year = models.IntegerField(default=datetime.date.today().year)
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return f'{self.class_code}-({self.year})'


class ClassYearInfo(models.Model):
	class_id = models.ForeignKey(ClassYear, on_delete=models.CASCADE, related_name='info')
	group = models.ForeignKey(Groups, on_delete=models.SET_NULL, related_name='class_year', null=True, blank=True)
	subjects = models.ManyToManyField(SubjectList, related_name='class_year')

	def __str__(self):
		return f'{self.class_id}({self.group})'



#									year-wise sections

class Sections(models.Model):
	name = models.CharField(max_length=50)
	class_info = models.ForeignKey(ClassYearInfo, on_delete=models.CASCADE, related_name='sections')
	class_teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, related_name='sections', null=True)
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return f'{self.name}-{self.class_info}'




# 										year-wise student academic info

class StudentAcademicInfo(models.Model):
	student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='academic_info')
	class_id = models.ForeignKey(ClassYear, on_delete=models.SET_NULL, related_name='students', null=True)
	group = models.ForeignKey(Groups, on_delete=models.SET_NULL, related_name='students', null=True, blank=True)
	section = models.CharField(max_length=10, null=True)
	roll = models.IntegerField(null=True)
	session = models.IntegerField(default=datetime.date.today().year)
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return f'{self.student.__str__()}'




# 										teacher academic info

class TeacherAcademicInfo(models.Model):
	teacher = models.OneToOneField(Teacher, on_delete=models.CASCADE, related_name='academic_info', primary_key=True)
	takes = models.ManyToManyField(SubjectList, related_name='takes')
	designation = models.CharField(max_length=100, null=True, blank=True)
	joined_at = models.DateField(null=True, blank=True)
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.teacher.__str__()



# 										staff academic info

class StaffAcademicInfo(models.Model):
	staff = models.OneToOneField(Staff, on_delete=models.CASCADE, related_name='academic_info', primary_key=True)
	designation = models.CharField(max_length=100, null=True, blank=True)
	joined_at = models.DateField(null=True, blank=True)
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.staff.__str__()

