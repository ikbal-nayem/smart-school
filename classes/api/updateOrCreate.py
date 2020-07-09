from rest_framework.response import Response


from classes.api.serializer import (
	StudentAcademicInfoSerializer,
	TeacherAcademicInfoSerializer,
	StaffAcademicInfoSerializer
)
from classes.models import (
	Groups,
	ClassYear,
	SubjectList,
	StudentAcademicInfo,
	TeacherAcademicInfo,
	StaffAcademicInfo
)




def update_StudentAcademicInfo(student, data, action='update'):

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
		else:
			''' if 'session' does not exists then create new AcademicInfo instance for the student '''
			obj = StudentAcademicInfo.objects.filter(student=student, session=data['session'])
			obj = obj.first() if obj.exists() else StudentAcademicInfo(student=student)

		academic_data = new = update(obj, data)
		new.save()
		return StudentAcademicInfoSerializer(academic_data).data




# 								teacher academic info

def update_TeacherAcademicInfo(teacher, data):
	teacher = TeacherAcademicInfo.objects.get(teacher=teacher)
	try:
		if data.get('takes'):
			for sub in teacher.takes.all():
				teacher.takes.remove(sub)
			for new in data.pop('takes'):
				teacher.takes.add(SubjectList.objects.get(id=new))
	except Exception as e:
		return {'is_valid': False, 'errors': {'academic_info':{'takes': [str(e)]}}}
	serializer = TeacherAcademicInfoSerializer(teacher, data=data)
	if serializer.is_valid():
		serializer.save()
		return {'is_valid': True, 'validated_data':serializer.data}
	return {'is_valid':False, 'errors': serializer.errors}





# 								staff academic info

def update_StaffAcademicInfo(staff, data):
	staff = StaffAcademicInfo.objects.get(staff=staff)
	serializer = StaffAcademicInfoSerializer(staff, data=data, partial=True)
	if serializer.is_valid():
		serializer.save()
		return {'is_valid': True, 'validated_data':serializer.data}
	return {'is_valid':False, 'errors': serializer.errors}



