# Generated by Django 4.0.3 on 2022-03-16 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Empresa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nombre_de_la_empresa', models.CharField(max_length=50)),
                ('Direccion', models.CharField(max_length=50)),
                ('NIT', models.CharField(max_length=20)),
                ('Telefono', models.CharField(max_length=20)),
            ],
        ),
    ]
