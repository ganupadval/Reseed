# Generated by Django 3.2.8 on 2022-11-01 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book_admin', '0002_alter_book_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='image',
            field=models.ImageField(null=True, upload_to='product_img/'),
        ),
    ]
