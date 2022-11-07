from base.models import Note
from sellerform.models import Form


class FormSerializer(ModelSerializer):
    class Meta:
        model = Form
        fields = '__all__'