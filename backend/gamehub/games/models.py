from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=255)


class Platform(models.Model):
    title = models.CharField(max_length=255)


class Game(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    score = models.PositiveSmallIntegerField()
    platfroms = models.ManyToManyField(Platform, on_delete=models.PROTECT)

