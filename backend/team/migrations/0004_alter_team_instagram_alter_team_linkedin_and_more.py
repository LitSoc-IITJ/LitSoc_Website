# Generated by Django 4.1.7 on 2023-08-06 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0003_rename_description_team_quote_team_div_id_team_mail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='instagram',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='team',
            name='linkedin',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='team',
            name='quote',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
