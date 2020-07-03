from django.urls import path

from .views import (
	AccountSerilizerView
)


urlpatterns = [
    path('<account_type>/', AccountSerilizerView.as_view({'get': 'list'})),
    path('<account_type>/add/', AccountSerilizerView.as_view({'post': 'create'})),
    path('<account_type>/<username>/', AccountSerilizerView.as_view({'get': 'retrieve', 'put': 'update'})),
]