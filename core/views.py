import json

import requests
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from django.template.loader import render_to_string
from django.views.decorators.http import require_POST
from django.views.generic import TemplateView
from django.core.mail import send_mail, EmailMessage

from amocrm.client import AmoCRMClient
from core.captcha import create_assessment, verify_v3
from core.models import AmoCrm, MainPageSlide, Services, Exhibitions, Contacts, Dealers, Investors, ContactUs, Products
from .utils import BaseSidebarMixin, EnBaseSidebarMixin, ContactFormMixin, EnContactFormMixin


class IndexView(BaseSidebarMixin):
    template_name = 'index.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['slides'] = MainPageSlide.objects.all()
        return context


class ServicesView(BaseSidebarMixin, ContactFormMixin):
    template_name = 'services.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['services'] = Services.objects.get(pk=1)
        return context


class ExhibitionsView(BaseSidebarMixin, ContactFormMixin):
    template_name = 'exhibitions.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['exhibitions'] = Exhibitions.objects.all()
        return context


class ContactsView(BaseSidebarMixin):
    template_name = 'contacts.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['contacts'] = Contacts.objects.get(pk=1)
        return context


class DealersView(BaseSidebarMixin):
    template_name = 'dealers.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['dealers'] = Dealers.objects.get(pk=1)
        return context


class InvestorsView(BaseSidebarMixin):
    template_name = 'investors.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['investors'] = Investors.objects.get(pk=1)
        return context


class SearchView(BaseSidebarMixin):
    template_name = 'search.html'


class ContactFormView(BaseSidebarMixin):
    template_name = 'contact_form.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['contactUs'] = ContactUs.objects.get(pk=1)
        return context


class ProductView(BaseSidebarMixin):
    model = Products
    template_name = 'product_base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context['product'] = Products.objects.get(version=1, slug=self.kwargs['slug'])
        return context


class EnIndexView(EnBaseSidebarMixin):
    template_name = 'en/index.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['slides'] = MainPageSlide.objects.all()
        return context


class EnServicesView(EnBaseSidebarMixin, EnContactFormMixin):
    template_name = 'en/services.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['services'] = Services.objects.get(pk=1)
        return context


class EnExhibitionsView(EnBaseSidebarMixin, EnContactFormMixin):
    template_name = 'en/exhibitions.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['exhibitions'] = Exhibitions.objects.all()
        return context


class EnContactsView(EnBaseSidebarMixin):
    template_name = 'en/contacts.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['contacts'] = Contacts.objects.get(pk=1)
        return context


class EnDealersView(EnBaseSidebarMixin):
    template_name = 'en/dealers.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['dealers'] = Dealers.objects.get(pk=1)
        return context


class EnInvestorsView(EnBaseSidebarMixin):
    template_name = 'en/investors.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['investors'] = Investors.objects.get(pk=1)
        return context


class EnSearchView(EnBaseSidebarMixin):
    template_name = 'en/search.html'


class EnContactForm(EnBaseSidebarMixin):
    template_name = 'en/contact_form.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['contactUs'] = ContactUs.objects.get(pk=1)
        return context


class EnProductView(BaseSidebarMixin):
    model = Products
    template_name = 'en/product_base.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context['product'] = Products.objects.get(version=2, slug=self.kwargs['slug'])
        return context


@require_POST
def send_message(request):
    try:
        data = {key: value for key, value in request.POST.items()}

        # verify response with Google
        captcha_score = verify_v3(data['token'])

        if captcha_score > 0.5:
            if 'files' in request.FILES:
                files = request.FILES['files']
                fs = FileSystemStorage(location=settings.FILES_ROOT)
                filename = fs.save(files.name, files)
                file_url = fs.url(filename)
                data['file'] = f'https://antaross.com/{settings.FILES_URL}{filename}/'

            # mail
            template = loader.get_template('email_message.txt')
            message = template.render(data)

            msg = EmailMessage(
                data['theme'],
                message,
                from_email='robot@antaross.com',
                to=['it@beautysystems.ru'],
            )
            msg.send()

            # amoCRM
            amo = AmoCrm.objects.get(id=settings.AMOCRM_ID)
            client = AmoCRMClient(amo=amo, redirect_uri=amo.redirect_url)

            contact = {
                'name': data['user'],
                'phone': data['phone'] if 'phone' in data else None,
                'email': data['email'] if 'email' in data else None,
            }
            callback = f"Связаться через: {data['callback']}\n" if 'callback' in data else None
            text = f"Задача: {data['text']}\n" if 'text' in data else None
            file = f"Файл: {data['file']}\n" if 'file' in data else None
            service = f"Услуга: {data['service']}\n" if 'service' in data else None
            client.create_lead(contact, callback, service, text, file)

            return HttpResponse(json.dumps(1))

        return HttpResponse(json.dumps('Invalid token ' + str(captcha_score)))
    except Exception as e:
        print(e)
        return HttpResponse(json.dumps(0))

