from django.db import models

# Create your models here.


class Notification(models.Model):
    title = models.CharField(max_length=120)
    content = models.CharField(max_length=150)
    customer = models.IntegerField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
