from rest_framework import generics
from shuttleapi.models import Gym
from shuttleapi.serializers import GymSerializer


class GymList(generics.ListCreateAPIView):
    queryset = Gym.objects.all()
    serializer_class = GymSerializer


class GymDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gym.objects.all()
    serializer_class = GymSerializer
