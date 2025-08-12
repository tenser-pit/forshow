import datetime

from django.core.management import BaseCommand
from django.conf import settings
from django.utils import timezone

from core.models import AmoCrm
from amocrm.client import AmoCRMClient


class Command(BaseCommand):
    def handle(self, *args, **options):
        amo = AmoCrm.objects.get(id=settings.AMOCRM_ID)
        client = AmoCRMClient(amo=amo, redirect_uri='https://antaross.com')
        result = client.create_pipeline({
            "name": "Antaross",
            "is_main": False,
            "is_unsorted_on": True,
            "sort": 20,
            "_embedded": {
                "statuses": [
                    {
                        "name": "Получен новый лид",
                        "sort": 10,
                        "color": "#ffc8c8"
                    }
                ]
            }
        })

        print(result)
