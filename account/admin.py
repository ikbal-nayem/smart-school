from django.contrib import admin

from account.models import (
	Accounts,
	Student,
	Teacher,
	Staff,
	Gardian,
	PhoneBook,
	Pictures,
	LeaveInfo
)

class AccountAdmin(admin.ModelAdmin):
	list_display = ('get_full_name', 'username', 'account_type', 'is_admin')
	list_display_links = ('username', 'get_full_name',)
	list_filter = ('account_type', 'is_admin')
	search_fields = ['first_name', 'last_name']

class TeacherAdmin(admin.ModelAdmin):
	list_display = ('pk', '__str__', 'email')
	list_display_links = ('pk', '__str__', 'email')
	list_filter = ('account__is_admin',)
	search_fields = ['account__first_name', 'account__last_name']

class StudentAdmin(admin.ModelAdmin):
	list_display = ('pk', '__str__', 'address', 'admitted_at')
	list_display_links = ('pk', '__str__',)
	search_fields = ['account__first_name', 'account__last_name']

class StaffAdmin(admin.ModelAdmin):
	list_display = ('pk', '__str__', 'email')
	list_display_links = ('pk', '__str__', 'email')
	list_filter = ('account__is_admin',)
	search_fields = ['account__first_name', 'account__last_name']

class GardianAdmin(admin.ModelAdmin):
	list_display = ('pk', '__str__', 'email', 'student')
	list_display_links = ('pk', '__str__', 'email')
	search_fields = ['account__first_name', 'account__last_name']

class PhoneBookAdmin(admin.ModelAdmin):
	list_display = ('pk', '__str__', 'number')
	list_display_links = ('pk', '__str__', 'number')
	list_filter = ('account__account_type',)
	search_fields = ['account__first_name', 'account__last_name']

class PictureAdmin(admin.ModelAdmin):
	list_display = ('pk', '__str__', 'profile')
	list_display_links = ('pk', '__str__')
	list_filter = ('account__account_type',)
	search_fields = ['account__first_name', 'account__last_name']

class LeaveInfoAdmin(admin.ModelAdmin):
	list_display = ('pk', '__str__', 'is_left')
	list_display_links = ('pk', '__str__')
	list_filter = ('account__account_type', 'is_left')
	search_fields = ['account__first_name', 'account__last_name']


admin.site.register(Accounts, AccountAdmin)
admin.site.register(Student, StudentAdmin)
admin.site.register(Teacher, TeacherAdmin)
admin.site.register(Staff, StaffAdmin)
admin.site.register(Gardian, GardianAdmin)
admin.site.register(PhoneBook, PhoneBookAdmin)
admin.site.register(Pictures, PictureAdmin)
admin.site.register(LeaveInfo, LeaveInfoAdmin)