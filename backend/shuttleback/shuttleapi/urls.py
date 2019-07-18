from django.urls import include, path
from shuttleapi import views

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('gyms/', views.GymList.as_view()),
    path('gyms/<int:pk>/', views.GymDetail.as_view()),
]
