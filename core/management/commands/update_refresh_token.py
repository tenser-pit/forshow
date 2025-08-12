import datetime

from django.core.management import BaseCommand
from django.conf import settings
from django.utils import timezone

from core.models import AmoCrm
from amocrm.client import AmoCRMClient


class Command(BaseCommand):
    def handle(self, *args, **options):
        amo = AmoCrm.objects.get(id=settings.AMOCRM_ID)
        client = AmoCRMClient(amo=amo, redirect_uri=amo.redirect_url)
        if not amo.refresh_token:
            client.auth()
        else:
            if timezone.now() - amo.last_updated > datetime.timedelta(days=30):
                client.refresh()
