from rest_framework import serializers

from classes.models import (
	StudentAcademicInfo,
	TeacherAcademicInfo,
	StaffAcademicInfo
)



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




class TeacherAcademicInfoSerializer(serializers.ModelSerializer):
	takes = serializers.SlugRelatedField(slug_field='name', read_only=True, many=True)
	class Meta:
		model = TeacherAcademicInfo
		exclude = ['teacher', '_created', '_updated']




class StaffAcademicInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = StaffAcademicInfo
		exclude = ['staff', '_created', '_updated']