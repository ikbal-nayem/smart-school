from django.urls import path

from classes.api.views import (
	ClassesView,
	ClassFormView
)

urlpatterns = [
    path('', ClassesView.as_view({'get': 'classList'})),
    path('student-form/', ClassFormView.as_view({'get': 'studentForm'})),
    path('<class_code>/', ClassesView.as_view({'get': 'classInfo'})),
]