# Generated by Django 3.2.8 on 2022-11-01 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sellerform', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='image',
            field=models.ImageField(null=True, upload_to='bookimg/'),
        ),
        migrations.AlterField(
            model_name='form',
            name='transaction_img',
            field=models.ImageField(upload_to='transaction/'),
        ),
    ]
