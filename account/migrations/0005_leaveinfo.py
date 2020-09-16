# Generated by Django 3.0.7 on 2020-07-03 06:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_auto_20200630_1100'),
    ]

    operations = [
        migrations.CreateModel(
            name='LeaveInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_left', models.BooleanField(default=False)),
                ('discription', models.TextField(blank=True, null=True)),
                ('date', models.DateField(null=True)),
                ('account', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]