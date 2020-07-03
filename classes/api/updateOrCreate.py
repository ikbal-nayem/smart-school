from rest_framework.response import Response


from classes.api.serializer import (
	StudentAcademicInfoSerializer
)
from classes.models import (
	Groups,
	ClassYear,
	StudentAcademicInfo
)




def createStudentAcademicInfo(student, data, action='update'):

	def update(obj, data):
		obj.class_id = ClassYear.objects.filter(class_code__code=data['class_code'], year=data['session'], shift__name=data['shift']).first()
		obj.group = Groups.objects.filter(name=data.get('group', obj.group.name if obj.group else None)).first()
		obj.section = data.get('section', obj.section)
		obj.roll = data.get('roll', obj.roll)
		obj.session = data.get('session', obj.session)
		return obj

	if action == 'new':
		try:
			obj = StudentAcademicInfo.objects.filter(student=student).first()
			academic_data = update(obj, data)
			academic_data.save()
			return StudentAcademicInfoSerializer(academic_data).data
		except:
			return None

	elif action == 'update':
		if data.get('id'):
			obj = StudentAcademicInfo.objects.get(id=data['id'])
			academic_data = update(obj, data).save()
			return StudentAcademicInfoSerializer(academic_data).data
		else:
			''' if 'session' does not exists then create new AcademicInfo instance for the student '''

			obj = StudentAcademicInfo.objects.filter(student=student, session=data['session'])
			obj = obj.first() if obj.exists() else StudentAcademicInfo(student=student)
			academic_data = update(obj, data).save()
			print(academic_data)
			return StudentAcademicInfoSerializer(academic_data).data

