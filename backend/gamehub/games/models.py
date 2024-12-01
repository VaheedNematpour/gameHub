from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Platform(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Game(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    score = models.PositiveSmallIntegerField()
    platfroms = models.ManyToManyField(Platform)

