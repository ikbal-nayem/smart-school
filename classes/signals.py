from django.db.models.signals import post_save
from django.dispatch import receiver

from classes.models import TeacherAcademicInfo, StaffAcademicInfo, StudentAcademicInfo
from account.models import Teacher, Staff, Student





@receiver(post_save, sender=Student)
def createStudentAcademicInfo(sender, instance, created, **kwargs):
	if created:
		StudentAcademicInfo.objects.create(student=instance)
		



@receiver(post_save, sender=Teacher)
def createTeacherAcademicInfo(sender, instance, created, **kwargs):
	if created:
		TeacherAcademicInfo.objects.create(teacher=instance)




@receiver(post_save, sender=Staff)
def createStaffAcademicInfo(sender, instance, created, **kwargs):
	if created:
		StaffAcademicInfo.objects.create(staff=instance)
		
