from django.db import models
from django.conf import settings
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

from imagekit.models import ProcessedImageField, ImageSpecField
from imagekit.processors import ResizeToFill


# 												custom user model

class AccountManager(BaseUserManager):
	def create_user(self, username, first_name, last_name, account_type, password=None):
		user = self.model(username=username, first_name=first_name, last_name=last_name, account_type=account_type)
		if password:
			user.set_password(password)
		user.save()
		return user

	def create_superuser(self, username, first_name, last_name, account_type, password=None):
		user = self.create_user(username, first_name, last_name, account_type, password)
		user.is_staff = True
		user.is_superuser = True
		user.is_admin = True
		user.save()
		return user


class Accounts(AbstractBaseUser, PermissionsMixin):
	class ACCOUNT_TYPE(models.TextChoices):
		Teacher = 'teacher'
		Student = 'student'
		Staff = 'staff'
		Guardian = 'guardian'
	username = models.CharField(max_length=255, primary_key=True)
	first_name = models.CharField(max_length=150)
	last_name = models.CharField(max_length=150)
	account_type = models.CharField(choices=ACCOUNT_TYPE.choices, max_length=8)
	is_active = models.BooleanField(default=True)
	is_staff = models.BooleanField(default=False)
	is_admin = models.BooleanField(default=False)

	objects = AccountManager()

	USERNAME_FIELD = 'username'
	REQUIRED_FIELDS = ['first_name', 'last_name', 'account_type']

	def get_full_name(self):
		return f'{self.first_name} {self.last_name}'

	def __str__(self):
		return self.get_full_name()




# 												Teacher model

class Teacher(models.Model):
	class MARITAL_STATUS(models.TextChoices):
		Married = 'married'
		Unmarried = 'unmarried'
	class GENDER(models.TextChoices):
		Male = 'male'
		Female = 'female'
		Others = 'others'
	account = models.OneToOneField(Accounts, on_delete=models.CASCADE, primary_key=True, related_name='teacher_personal_info')
	degree = models.CharField(max_length=100, null=True, blank=True)
	gender = models.CharField(choices=GENDER.choices, max_length=7, null=True)
	dob = models.DateField(null=True, blank=True)
	marital_status = models.CharField(max_length=9, choices=MARITAL_STATUS.choices, null=True)
	religion = models.CharField(max_length=100, null=True, blank=True)
	blood_group = models.CharField(max_length=10, null=True, blank=True)
	address = models.TextField(null=True, blank=True)
	email = models.EmailField(null=True, blank=True, unique=True)
	facebook_url = models.URLField(null=True, blank=True)
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.account.get_full_name()



#												 Staff model

class Staff(models.Model):
	class MARITAL_STATUS(models.TextChoices):
		Married = 'married'
		Unmarried = 'unmarried'
	class GENDER(models.TextChoices):
		Male = 'male'
		Female = 'female'
		Others = 'others'
	account = models.OneToOneField(Accounts, on_delete=models.CASCADE, primary_key=True, related_name='staff_personal_info')
	qualification = models.TextField(null=True, blank=True)
	gender = models.CharField(choices=GENDER.choices, max_length=7, null=True)
	dob = models.DateField(null=True, blank=True)
	marital_status = models.CharField(max_length=9, choices=MARITAL_STATUS.choices, null=True)
	religion = models.CharField(max_length=100, null=True, blank=True)
	blood_group = models.CharField(max_length=10, null=True, blank=True)
	address = models.TextField(null=True, blank=True)
	email = models.EmailField(null=True, blank=True, unique=True)
	facebook_url = models.URLField(null=True, blank=True)
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.account.get_full_name()


# 												Guardian model

class Guardian(models.Model):
	class GENDER(models.TextChoices):
		Male = 'male'
		Female = 'female'
		Others = 'others'
	account = models.OneToOneField(Accounts, on_delete=models.CASCADE, primary_key=True, related_name='guardian_personal_info')
	occupation = models.CharField(max_length=255, null=True, blank=True)
	gender = models.CharField(choices=GENDER.choices, max_length=7, null=True)
	dob = models.DateField(null=True, blank=True)
	religion = models.CharField(max_length=100, null=True, blank=True)
	address = models.TextField(null=True, blank=True)
	email = models.EmailField(null=True, blank=True, unique=True)
	facebook_url = models.URLField(null=True, blank=True)
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.account.get_full_name()




# 												Student model

class Student(models.Model):
	class GENDER(models.TextChoices):
		Male = 'male'
		Female = 'female'
		Others = 'others'
	account = models.OneToOneField(Accounts, on_delete=models.CASCADE, primary_key=True, related_name='student_personal_info')
	gender = models.CharField(choices=GENDER.choices, max_length=7, null=True)
	dob = models.DateField(null=True, blank=True)
	religion = models.CharField(max_length=100, null=True, blank=True)
	blood_group = models.CharField(max_length=10, null=True, blank=True)
	admitted_at = models.DateField(null=True, blank=True)
	address = models.TextField(null=True, blank=True)
	email = models.EmailField(null=True, blank=True, unique=True)
	guardian = models.ForeignKey(Guardian, on_delete=models.SET_NULL, related_name='students', null=True, blank=True)
	_created = models.DateTimeField(auto_now_add=True, auto_now=False)
	_updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.account.get_full_name()





class PhoneBook(models.Model):
	account = models.ForeignKey(Accounts, on_delete=models.CASCADE, related_name='phone_numbers')
	number = models.CharField(max_length=16)
	is_verified = models.BooleanField(default=False)

	def __str__(self):
		return self.account.get_full_name()




# 													pictures

class Pictures(models.Model):
	account = models.OneToOneField(Accounts, on_delete=models.CASCADE)
	profile = ProcessedImageField(upload_to='pictures/profile',
									processors=[ResizeToFill(512, 512)],
									format='JPEG',
									options={'quality': 80},
									default='pictures/profile/default.png')
	thumbnail = ImageSpecField(source='profile',
								processors=[ResizeToFill(128, 128)],
								format='JPEG',
                options={'quality': 90})

	def save(self, *args, **kwargs):
		import os
		if Pictures.objects.filter(account=self.account).exists():
			old_name = os.path.split(Pictures.objects.get(account=self.account).profile.name)[-1]
			pic_number = (int(os.path.splitext(old_name)[0].split('-')[-1]) +1) if old_name != 'default.png' else 0
			try:
				ext = os.path.splitext(self.profile.name)[-1]
				self.profile.name = f'{self.account.username}-{str(pic_number)}'+ext
			except FileNotFoundError:
				pass
		super(Pictures, self).save(*args, **kwargs) 		
	

	def __str__(self):
		return self.account.get_full_name()




class LeaveInfo(models.Model):
	account = models.OneToOneField(Accounts, on_delete=models.CASCADE, primary_key=True)
	is_left = models.BooleanField(default=False, null=True)
	description = models.TextField(null=True, blank=True)
	date = models.DateField(null=True, blank=True)

	def __str__(self):
		return self.account.get_full_name()