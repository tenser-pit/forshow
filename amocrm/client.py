import json
import requests

from django.utils import timezone
from django.conf import settings

from .exceptions import CredentialError
from core.models import AmoCrm


class AmoCRMClient:
    def __init__(self, amo: AmoCrm, redirect_uri: str):
        self.api_version = 'v4'
        self._url = f'https://{amo.subdomain}.amocrm.ru/'
        self.amo = amo
        self._client_id = amo.amocrm_id
        self._client_secret = amo.secret_key
        self._redirect_uri = redirect_uri
        self._refresh_token = amo.refresh_token

    def __generate_data(self):
        return {
            'client_id': self._client_id,
            'client_secret': self._client_secret,
            'redirect_uri': self._redirect_uri,
        }

    def refresh(self):
        data = self.__generate_data()
        data.update({
            'grant_type': 'refresh_token',
            'refresh_token': self.amo.refresh_token,
        })

        response = requests.post(f'{self._url}oauth2/access_token', data=data)

        if response.status_code == requests.codes.ok:
            response_data = response.json()

            self.amo.refresh_token = response_data["refresh_token"]
            self.amo.last_updated = timezone.now()
            self.amo.save()
            # print(f'Bearer {response_data["access_token"]}')
            return f'Bearer {response_data["access_token"]}'
        else:
            raise CredentialError(response.json().get('detail'))

    def auth(self):
        data = self.__generate_data()
        data.update({
            'grant_type': 'authorization_code',
            'code': self.amo.access_code,
        })

        response = requests.post(f'{self._url}oauth2/access_token', data=data)
        # print(response.json())
        if response.ok:
            response_data = response.json()

            self.amo.refresh_token = response_data["refresh_token"]
            self.amo.last_updated = timezone.now()
            self.amo.save()
            return f'Bearer {response_data["access_token"]}'
        else:
            raise CredentialError(response.json().get('detail'))

    def create_field(self, data):
        r = requests.post(
            f'{self._url}api/{self.api_version}/leads/custom_fields',
            data=json.dumps([data]),
            headers={
                'Authorization': self.refresh(),
                'Content-Type': 'application/json'
            }
        )
        if r.ok:
            return r.json()['_embedded']['custom_fields'][0]
        else:
            raise Exception(r.json())

    def delete_field(self, data):
            r = requests.delete(
                f'{self._url}api/{self.api_version}/contacts/custom_fields/{data}',
                headers={
                    'Authorization': self.refresh(),
                    'Content-Type': 'application/json'
                }
            )
            if r.ok:
                return r
            else:
                raise Exception(r.json())

    def create_pipeline(self, data):
        r = requests.post(
            f'{self._url}api/{self.api_version}/leads/pipelines',
            data=json.dumps([data]),
            headers={
                'Authorization': self.refresh(),
                'Content-Type': 'application/json'
            }
        )
        if r.ok:
            return r.json()['_embedded']['pipelines'][0]
        else:
            raise Exception(r.json())

    def create_contact(self, contact):
        data = [
            {
                "name": contact['name'],
                "custom_fields_values": []
            }
        ]
        if contact['phone']:
            data[0]['custom_fields_values'].append(
                {
                    "field_id": settings.AMOCRM_FIELD_ID_PHONE,
                    "values": [
                        {
                            "value": contact['phone'],
                        }
                    ]
                })

        if contact['email']:
            data[0]['custom_fields_values'].append(
                {
                    "field_id": settings.AMOCRM_FIELD_ID_EMAIL,
                    "values": [
                        {
                            "value": contact['email'],
                        }
                    ]
                })

        data = json.dumps(data)
        r = requests.post(
            f'{self._url}api/{self.api_version}/contacts',
            data=data,
            headers={
                'Authorization': self.refresh(),
                'Content-Type': 'application/json'
            }
        )
        if r.ok:
            return r.json()['_embedded']['contacts'][0]['id']
        else:
            raise Exception(r.json())

    def create_lead(self, contact, callback, service, text, file):
        contact = self.create_contact(contact)
        title = 'Заявка с сайта antaross.com'
        data = [
            {
                "name": title,
                'pipeline_id': settings.AMOCRM_PIPELINE_ID,
                'status_id': settings.AMOCRM_STATUS_ID,
                "custom_fields_values": [],
                "_embedded": {
                    "contacts": [
                        {
                            "id": contact
                        }
                    ]
                }
            }
        ]

        data = json.dumps(data)
        r = requests.post(
            f'{self._url}api/{self.api_version}/leads',
            data=data,
            headers={
                'Authorization': self.refresh(),
                'Content-Type': 'application/json'
            }
        )

        lead_id = None
        if r.ok:
            lead_id = r.json()['_embedded']['leads'][0]['id']
        else:
            raise Exception(r.json())

        if lead_id and (text or file):
            data = json.dumps([
                {
                    "note_type": "common",
                    "params": {
                        "text": f"{callback if callback else ''}{service if service else ''}{text if text else ''}{file if file else ''}"
                    }
                }
            ])
            r = requests.post(
                f'{self._url}api/{self.api_version}/leads/{lead_id}/notes',
                data=data,
                headers={
                    'Authorization': self.refresh(),
                    'Content-Type': 'application/json'
                }
            )
            if r.ok:
                return
            else:
                raise Exception(r.json())
        else:
            return