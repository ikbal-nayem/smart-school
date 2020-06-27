from django.contrib import admin

from classes.models import (
	StudentAcademicInfo,
	TeacherSubjectInfo,
	ClassList,
	ClassYear,
	ClassYearInfo,
	Sections,
	Shifts,
	Groups,
	SubjectList
)


class StudentAcademicInfoAdmin(admin.ModelAdmin):
	list_display = ('id', 'student', 'class_id', 'group', 'roll', 'session')
	list_display_links = ('id', 'student', 'group', 'roll')
	search_fields = ('student__account__first_name', 'student__account__last_name', 'roll')
	list_filter = ('class_id__class_code', 'class_id__info__group')

class TeacherSubjectInfoAdmin(admin.ModelAdmin):
	list_display = ('id', 'teacher')
	list_display_links = ('id', 'teacher')
	search_fields = ('teacher__account__first_name', 'teacher__account__last_name')

class ClassListAdmin(admin.ModelAdmin):
	list_display = ('code', 'name')
	list_display_links = ('code', 'name')
	search_fields = ('name',)
	list_filter = ('code',)

class ClassYearAdmin(admin.ModelAdmin):
	list_display = ('id', 'class_code', 'shift', 'year')
	list_display_links = ('id', 'class_code')
	search_fields = ('class_code', 'year')
	list_filter = ('class_code', 'year')

class ClassYearInfoAdmin(admin.ModelAdmin):
	list_display = ('id', 'class_id', 'group')
	list_display_links = ('id', 'class_id')
	search_fields = ('class_id__class_code',)
	list_filter = ('class_id__class_code', 'group', 'class_id__year')

class SubjectListAdmin(admin.ModelAdmin):
	list_display = ('id', 'code', 'name', 'discription')
	list_display_links = ('id', 'name', 'code')
	search_fields = ('name', 'code')

class SectionsAdmin(admin.ModelAdmin):
	list_display = ('id', 'name', 'class_info', 'class_teacher')
	list_display_links = ('id', 'name', 'class_info')
	list_filter = ('name', 'class_info__class_id__year')
	search_fields = ('name', 'class_info')



admin.site.register(StudentAcademicInfo, StudentAcademicInfoAdmin)
admin.site.register(TeacherSubjectInfo, TeacherSubjectInfoAdmin)
admin.site.register(ClassList, ClassListAdmin)
admin.site.register(ClassYear, ClassYearAdmin)
admin.site.register(ClassYearInfo, ClassYearInfoAdmin)
admin.site.register(Sections, SectionsAdmin)
admin.site.register(Shifts)
admin.site.register(Groups)
admin.site.register(SubjectList, SubjectListAdmin)