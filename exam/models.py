from django.db import models
import datetime

from account.models import Accounts, Teacher
from classes.models import ClassYearInfo, SubjectList, Sections


class ExamTypes(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name


class Exam(models.Model):
	exam_type = models.ForeignKey(ExamTypes, on_delete=models.SET_NULL, null=True, related_name='exam')
	class_info = models.ForeignKey(ClassYearInfo, on_delete=models.CASCADE, related_name='exam')
	exam_start_date = models.DateField()
	exam_end_date = models.DateField()
	exam_duration = models.DurationField()
	full_mark = models.PositiveIntegerField()
	pass_number = models.PositiveSmallIntegerField()
	year = models.PositiveIntegerField(default=datetime.date.today().year)
	created_by = models.ForeignKey(Accounts, on_delete=models.SET_NULL, null=True, related_name='exam_created')
	updated_by = models.ForeignKey(Accounts, on_delete=models.SET_NULL, null=True, related_name='exam_updated')
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return f'{self.exam_type} ({self.year})'


class ExamRoutine(models.Model):
	exam_id = models.ForeignKey(Exam, on_delete=models.CASCADE, related_name='exam_routine')
	subject = models.ForeignKey(SubjectList, on_delete=models.SET_NULL, related_name='exam_routine', null=True)
	date = models.DateField()
	time = models.TimeField()

	def __str__(self):
		return self.exam_id.__str__()


class ClassTest(models.Model):
	class_info = models.ForeignKey(ClassYearInfo, on_delete=models.CASCADE)
	section = models.ForeignKey(Sections, on_delete=models.CASCADE)
	date = models.DateField()
	time = models.TimeField(null=True, blank=True)
	subject = models.ForeignKey(SubjectList, on_delete=models.SET_NULL, null=True)
	teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, related_name='class_test')
	marks = models.PositiveSmallIntegerField()

	def __str__(self):
		return self.class_info.__str__()