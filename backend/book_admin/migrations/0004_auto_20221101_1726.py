# Generated by Django 3.2.8 on 2022-11-01 11:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('book_admin', '0003_alter_book_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='branch',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='book_admin.branch'),
        ),
        migrations.AddField(
            model_name='book',
            name='semester',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='book_admin.semester'),
        ),
    ]
