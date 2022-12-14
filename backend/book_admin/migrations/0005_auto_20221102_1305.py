# Generated by Django 3.2.8 on 2022-11-02 07:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('book_admin', '0004_auto_20221101_1726'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='branch',
        ),
        migrations.RemoveField(
            model_name='book',
            name='semester',
        ),
        migrations.RemoveField(
            model_name='book',
            name='subject',
        ),
        migrations.RemoveField(
            model_name='subject',
            name='branch',
        ),
        migrations.RemoveField(
            model_name='subject',
            name='semester',
        ),
        migrations.AddField(
            model_name='branch',
            name='semester',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='book_admin.semester'),
        ),
        migrations.AddField(
            model_name='semester',
            name='subject',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='book_admin.subject'),
        ),
        migrations.AddField(
            model_name='subject',
            name='books',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='book_admin.book'),
        ),
    ]
