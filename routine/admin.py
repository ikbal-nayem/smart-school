from django.contrib import admin
from routine.models import (
	Routine,
	ClassRoutine,
	ClassHappend,
	StudentAttendance,
	StudentPerClassAttendance,
	TeacherAttendance
)


class RoutineAdmin(admin.ModelAdmin):
	list_display = ('id', '__str__', 'per_day_class', 'year')
	list_display_links = ('id', '__str__')
	search_fields = ('class_info__class_id__class_code__name',)
	list_filter = ('year', 'class_info__class_id__class_code')

class ClassRoutineAdmin(admin.ModelAdmin):
	list_display = ('id', 'routine', 'subject', 'teacher', 'section', 'day')
	list_display_links = ('id', 'routine', 'subject', 'teacher', 'section', 'day')
	search_fields = ('routine__class_info__class_id__class_code__name',)
	list_filter = ('routine__class_info__class_id__class_code', 'routine__year')

class ClassHappendAdmin(admin.ModelAdmin):
	list_display = ('id', 'class_info', 'subject', 'section')
	list_display_links = ('id', 'subject', 'section')
	search_fields = ('subject__name',)
	list_filter = ('class_info__class_id__class_code', 'class_info__class_id__year')

class StudentAttendanceAdmin(admin.ModelAdmin):
	list_display = ('id', 'student', 'class_info', 'section', 'date')
	list_display_links = ('id', 'student', 'class_info', 'section')
	search_fields = ('student__account__first_name', 'student__account__last_name')
	list_filter = ('class_info__class_id__class_code', 'class_info__class_id__year')

class StudentPerClassAttendanceAdmin(admin.ModelAdmin):
	list_display = ('id', 'student', 'class_info', 'subject', 'section', 'date')
	list_display_links = ('id', 'student', 'class_info', 'section')
	search_fields = ('student__account__first_name', 'student__account__last_name', 'subject__name')
	list_filter = ('class_info__class_id__class_code', 'class_info__class_id__year')

class TeacherAttendanceAdmin(admin.ModelAdmin):
	list_display = ('id', 'teacher', 'is_present', 'date')
	list_display_links = ('id', 'teacher')
	search_fields = ('teacher__account__first_name', 'teacher__account__last_name')
	list_filter = ('date',)



admin.site.register(Routine, RoutineAdmin)
admin.site.register(ClassRoutine, ClassRoutineAdmin)
admin.site.register(ClassHappend, ClassHappendAdmin)
admin.site.register(StudentAttendance, StudentAttendanceAdmin)
admin.site.register(StudentPerClassAttendance, StudentPerClassAttendanceAdmin)
admin.site.register(TeacherAttendance, TeacherAttendanceAdmin)
