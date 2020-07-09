from django.urls import path

from classes.api.views import (
	ClassesView
)

urlpatterns = [
    path('', ClassesView.as_view({'get': 'classList'})),
    path('<class_code>/', ClassesView.as_view({'get': 'classInfo'})),
]