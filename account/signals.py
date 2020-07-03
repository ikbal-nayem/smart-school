import os, shutil
from django.db.models.signals import post_save, pre_save, pre_delete
from django.dispatch import receiver
from django.contrib.auth import get_user_model

from account.models import (
	Student,
	Teacher,
	Staff,
	Gardian,
	Pictures,
	LeaveInfo
)
User = get_user_model()


@receiver(post_save, sender=User)
def createAccount(sender, instance, created, **kwargs):
	if created:
		Pictures.objects.create(account=instance)
		LeaveInfo.objects.create(account=instance)
		if instance.account_type == 'teacher':
			Teacher.objects.create(account=instance)
		elif instance.account_type == 'student':
			Student.objects.create(account=instance)
		elif instance.account_type == 'staff':
			Staff.objects.create(account=instance)
		elif instance.account_type == 'gardian':
			Gardian.objects.create(account=instance)




@receiver(pre_save, sender=Pictures)
def deletePreviousPicturesOnUpdate(sender, instance, **kwargs):
	deletePictures(instance)

@receiver(post_save, sender=Pictures)
def createThumbnail(sender, instance, created, **kwargs):
	instance.thumbnail.path

@receiver(pre_delete, sender=Pictures)
def deletePreviousPicturesOnDelete(sender, instance, **kwargs):
	deletePictures(instance, action='delete')
	



def deletePictures(instance, action=None):
	if Pictures.objects.filter(account=instance.account).exists():
		inst = Pictures.objects.get(account=instance.account)
		try:
			c_profile = os.path.join(os.getcwd(), str(inst.profile.url)[1:])
			c_thumbnail = os.path.join(os.getcwd(), str(os.path.dirname(inst.thumbnail.url))[1:])
			if str(inst.profile.url) != '/media/pictures/profile/default.png':
				os.remove(c_profile)
				shutil.rmtree(c_thumbnail)
		except:
			print('No picture found')