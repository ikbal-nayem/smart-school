from django.contrib import admin

from exam.models import Exam, ExamTypes, ExamRoutine



class ExamTypesAdmin(admin.ModelAdmin):
	list_display = ('id', 'name')
	list_display_links = ('id', 'name')

class ExamAdmin(admin.ModelAdmin):
	list_display = ('id', 'exam_type', 'class_info', 'exam_start_date', 'year')
	list_display_links = ('id', 'exam_type', 'class_info')
	list_filter = ('year', 'exam_type__name', 'class_info__class_id__class_code')

class ExamRoutineAdmin(admin.ModelAdmin):
	list_display = ('id', 'exam_id', 'subject', 'date')
	list_display_links = ('id', 'exam_id', 'subject')
	list_filter = ('exam_id__year', 'exam_id__exam_type__name', 'exam_id__class_info__class_id__class_code')


admin.site.register(ExamTypes, ExamTypesAdmin)
admin.site.register(Exam, ExamAdmin)
admin.site.register(ExamRoutine, ExamRoutineAdmin)