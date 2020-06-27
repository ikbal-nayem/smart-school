from django.db.models.signals import post_save
from django.dispatch import receiver

from classes.models import TeacherSubjectInfo
from account.models import Teacher


@receiver(post_save, sender=Teacher)
def createTeacherSubjectInfo(sender, instance, created, **kwargs):
	if created:
		TeacherSubjectInfo.objects.create(teacher=instance)
		