from django.urls import path

from .views import (
	AccountSerilizerView,
	LeaveInfoView,
	GuardianSearchListView
)


urlpatterns = [
    path('guardian/search-list/', GuardianSearchListView.as_view({'get': 'list'})),
    path('<account_type>/', AccountSerilizerView.as_view({'get': 'list'})),
    path('<account_type>/add/', AccountSerilizerView.as_view({'post': 'create'})),
    path('<account_type>/<username>/', AccountSerilizerView.as_view({'get': 'retrieve', 'put': 'update'})),
    path('<account_type>/<username>/delete/', AccountSerilizerView.as_view({'delete': 'destroy'})),
    path('<account_type>/<username>/leave/', LeaveInfoView.as_view({'get': 'retrieve', 'post': 'update'})),
]