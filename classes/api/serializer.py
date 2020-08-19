from rest_framework import serializers
import datetime

from classes.models import (
	StudentAcademicInfo,
	TeacherAcademicInfo,
	StaffAcademicInfo,
	SubjectList,
	ClassYear,
	ClassYearInfo,
	Shifts,
	SubjectList,
	Sections
)




class SubjectListSerializer(serializers.ModelSerializer):
	class Meta:
		model = SubjectList
		exclude = ['_created', '_updated']




# 											student academic info

class StudentAcademicInfoSerializer(serializers.ModelSerializer):
	shift = serializers.SerializerMethodField()
	class_code = serializers.SerializerMethodField()
	group = serializers.SerializerMethodField()
	class Meta:
		model = StudentAcademicInfo
		exclude = ['student', '_created', '_updated']

	def get_class_code(self, obj):
		return obj.class_id.class_code.code if obj.class_id else None
	def get_group(self, obj):
		return obj.group.name if obj.group else None
	def get_shift(self, obj):
		return obj.class_id.shift.name if obj.class_id else None




# 										teacher academic info

class TeacherAcademicInfoSerializer(serializers.ModelSerializer):
	takes = serializers.SerializerMethodField()
	class Meta:
		model = TeacherAcademicInfo
		exclude = ['teacher', '_created', '_updated']

	def get_takes(self, obj):
		return SubjectListSerializer(obj.takes.all(), many=True).data



# 										staff academic information

class StaffAcademicInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = StaffAcademicInfo
		exclude = ['staff', '_created', '_updated']







# 											shifts

class ShiftSerializer(serializers.ModelSerializer):
	class Meta:
		model = Shifts
		exclude = ['id', '_created', '_updated']



# 										subject list

class SubjectListSerializer(serializers.ModelSerializer):
	class Meta:
		model = SubjectList
		exclude = ['id', '_created', '_updated']



# 										Sections

class SectionsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Sections
		exclude = ['_created', '_updated', 'class_info']



# 										class year info

class ClassYearInfoSerializer(serializers.ModelSerializer):
	group = serializers.SerializerMethodField()
	number_of_student = serializers.SerializerMethodField()
	subjects = SubjectListSerializer(many=True)
	sections = SectionsSerializer(many=True)
	class Meta:
		model = ClassYearInfo
		exclude = ['class_id']
		depth = 1

	def get_group(self, obj):
		return obj.group.name if obj.group else None
	def get_number_of_student(self, obj):
		return len(obj.class_id.students.filter(group=obj.group.id if obj.group else None))



# 										class list (year wise)

class ClassesSerializer(serializers.ModelSerializer):
	shift = serializers.SerializerMethodField()
	class Meta:
		model = ClassYear
		exclude = ['_created', '_updated']
		depth = 1

	def get_shift(self, obj):
		return ShiftSerializer(obj.shift).data



# 										class details information

class ClassesDetailSerializer(serializers.ModelSerializer):
	year_list = serializers.SerializerMethodField()
	shift = serializers.SerializerMethodField()
	number_of_student = serializers.SerializerMethodField()
	info = ClassYearInfoSerializer(many=True)
	class Meta:
		model = ClassYear
		fields = '__all__'

	def get_year_list(self, obj):
		return [cl.year for cl in obj.class_code.class_year.all()]
	def get_shift(self, obj):
		return ShiftSerializer(obj.shift).data
	def get_number_of_student(self, obj):
		return len(obj.students.all())



class StudentFormSerializer(serializers.Serializer):
	shifts = serializers.SerializerMethodField()
	shift_classes = serializers.SerializerMethodField()

	def get_shifts(self, obj):
		return [s.name for s in obj]
	def get_shift_classes(self, obj):
		sft = {}
		for shift in obj:
			sft[shift.name] = {}
			cls_list = []
			for clss in shift.class_year.filter(year=datetime.date.today().year):
				cls_list.append(clss.class_code.code)
				sft[shift.name][clss.class_code.code] = {}
				if clss.class_code.code in ['ix', 'x', 'xi', 'xii']:
					sft[shift.name][clss.class_code.code]['has_group'] = True
					grps = []
					for cls_info in clss.info.all():
						grps.append(cls_info.group.name)
						sft[shift.name][clss.class_code.code][cls_info.group.name] = {}
						sft[shift.name][clss.class_code.code][cls_info.group.name]['sections'] = [sec.name for sec in cls_info.sections.all()]
					sft[shift.name][clss.class_code.code]['group_list'] = grps
				else:
					sft[shift.name][clss.class_code.code]['has_group'] = False
					sft[shift.name][clss.class_code.code]['sections'] = [sec.name for sec in clss.info.first().sections.all()] if clss.info.first() else []
			sft[shift.name]['class_list'] = cls_list
		return sft