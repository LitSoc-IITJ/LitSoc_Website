# Generated by Django 4.1.7 on 2023-07-29 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0003_alter_issuedbook_member_alter_issuerequest_moderator'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='name',
            field=models.CharField(blank=True, max_length=80),
        ),
    ]
