from django.db import models
from django.utils import timezone
import datetime

from account.models import Teacher, Accounts, Student
from classes.models import (
	ClassYearInfo,
	Sections,
	SubjectList
)



# 											class routine

class Routine(models.Model):
	class_info = models.ForeignKey(ClassYearInfo, on_delete=models.CASCADE, related_name='routine')
	per_day_class = models.SmallIntegerField()
	class_start_time = models.TimeField()
	class_end_time = models.TimeField()
	break_start_time = models.TimeField(null=True, blank=True)
	break_duration = models.DurationField(null=True, blank=True)
	year = models.PositiveIntegerField(default=datetime.date.today().year)
	created_by = models.ForeignKey(Accounts, on_delete=models.DO_NOTHING, related_name='routine_created')
	updated_by = models.ForeignKey(Accounts, on_delete=models.DO_NOTHING, related_name='routine_updated')
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return f'{self.class_info.class_id.class_code.code}-({self.class_info.class_id.year})'


class ClassRoutine(models.Model):
	class DAYChoices(models.TextChoices):
		Sat = 'Sat'
		Sun = 'Sun'
		Mon = 'Mon'
		Tue = 'Tue'
		Wed = 'Wed'
		Thu = 'Thu'
		Fri = 'Fri'
	routine = models.ForeignKey(Routine, on_delete=models.CASCADE, related_name='get_routine')
	section = models.ForeignKey(Sections, on_delete=models.CASCADE, related_name='get_routine')
	day = models.CharField(choices=DAYChoices.choices, max_length=3)
	start_time = models.TimeField()
	end_time = models.TimeField()
	subject = models.ForeignKey(SubjectList, on_delete=models.DO_NOTHING, related_name='get_routine')
	teacher = models.ForeignKey(Teacher, on_delete=models.DO_NOTHING, related_name='get_routine')

	def __str__(self):
		return self.routine.__str__()



class ClassHappend(models.Model):
	class_info = models.ForeignKey(ClassYearInfo, on_delete=models.CASCADE, related_name='class_happend')
	section = models.ForeignKey(Sections, on_delete=models.DO_NOTHING, related_name='class_happend')
	subject = models.ForeignKey(SubjectList, on_delete=models.DO_NOTHING, related_name='class_happend', null=True, blank=True)
	is_proxy = models.BooleanField(default=False)
	taken_by = models.ForeignKey(Teacher, on_delete=models.DO_NOTHING, related_name='class_taken', null=True, blank=True)
	date = models.DateField(default=timezone.now)

	def __str__(self):
		return self.class_info.__str__()


class StudentAttendance(models.Model):
	student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='attendance')
	class_info = models.ForeignKey(ClassYearInfo, on_delete=models.CASCADE, related_name='attendance')
	section = models.ForeignKey(Sections, on_delete=models.DO_NOTHING, related_name='attendance')
	date = models.DateField(default=timezone.now)
	is_present = models.BooleanField(default=True)

	def __str__(self):
		return self.student.__str__()


class StudentPerClassAttendance(models.Model):
	student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='class_attendance')
	class_info = models.ForeignKey(ClassYearInfo, on_delete=models.CASCADE, related_name='class_attendance')
	section = models.ForeignKey(Sections, on_delete=models.CASCADE, related_name='class_attendance')
	subject = models.ForeignKey(SubjectList, on_delete=models.DO_NOTHING, related_name='class_attendance')
	date = models.DateField(default=timezone.now)
	is_present = models.BooleanField(default=True)

	def __str__(self):
		return self.student.__str__()


class TeacherAttendance(models.Model):
	teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='attendance')
	date = models.DateField(default=timezone.now)
	is_present = models.BooleanField(default=True)
	