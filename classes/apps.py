from django.apps import AppConfig


class ClassConfig(AppConfig):
    name = 'classes'

    def ready(self):
    	import classes.signals