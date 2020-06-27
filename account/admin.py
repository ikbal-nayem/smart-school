from django.contrib import admin

from account.models import (
	Accounts,
	Student,
	Teacher,
	Staff,
	Parents,
	PhoneBook,
	Pictures
)

class AccountAdmin(admin.ModelAdmin):
	list_display = ('get_full_name', 'username', 'account_type', 'is_admin')
	list_display_links = ('username', 'get_full_name',)
	list_filter = ('account_type', 'is_admin')
	search_fields = ['first_name', 'last_name']

class TeacherAdmin(admin.ModelAdmin):
	list_display = ('id', '__str__', 'email', 'designation', 'joined_at')
	list_display_links = ('id', '__str__', 'email')
	list_filter = ('account__is_admin', 'designation')
	search_fields = ['account__first_name', 'account__last_name']

class StudentAdmin(admin.ModelAdmin):
	list_display = ('id', '__str__', 'address', 'admitted_at')
	list_display_links = ('id', '__str__',)
	search_fields = ['account__first_name', 'account__last_name']

class StaffAdmin(admin.ModelAdmin):
	list_display = ('id', '__str__', 'email', 'joined_at')
	list_display_links = ('id', '__str__', 'email')
	list_filter = ('account__is_admin', 'designation')
	search_fields = ['account__first_name', 'account__last_name']

class ParentsAdmin(admin.ModelAdmin):
	list_display = ('id', '__str__', 'email', 'of')
	list_display_links = ('id', '__str__', 'email')
	search_fields = ['account__first_name', 'account__last_name']

class PhoneBookAdmin(admin.ModelAdmin):
	list_display = ('id', '__str__', 'number')
	list_display_links = ('id', '__str__', 'number')
	list_filter = ('account__account_type',)
	search_fields = ['account__first_name', 'account__last_name']

class PictureAdmin(admin.ModelAdmin):
	list_display = ('id', '__str__', 'profile')
	list_display_links = ('id', '__str__')
	list_filter = ('account__account_type',)
	search_fields = ['account__first_name', 'account__last_name']


admin.site.register(Accounts, AccountAdmin)
admin.site.register(Student, StudentAdmin)
admin.site.register(Teacher, TeacherAdmin)
admin.site.register(Staff, StaffAdmin)
admin.site.register(Parents, ParentsAdmin)
admin.site.register(PhoneBook, PhoneBookAdmin)
admin.site.register(Pictures, PictureAdmin)