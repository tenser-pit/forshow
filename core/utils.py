from django.views.generic import TemplateView
from .models import SidebarMenu, ContactUs


class BaseSidebarMixin(TemplateView):
    """ Миксин для передачи основного сайдбара с навигацией во все представления """
    template_name = 'base.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['baseSidebar'] = SidebarMenu.objects.get(pk=1)
        return context


class EnBaseSidebarMixin(TemplateView):
    """ Миксин для передачи основного сайдбара с навигацией во все представления """
    template_name = 'en/base.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['baseSidebar'] = SidebarMenu.objects.get(pk=1)
        return context


class ContactFormMixin(TemplateView):
    """ Миксин для контактной формы для services и exhibitions """
    template_name = 'contact_form.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['contactUs'] = ContactUs.objects.get(pk=1)
        return context


class EnContactFormMixin(TemplateView):
    """ Миксин для контактной формы для services и exhibitions """
    template_name = 'en/contact_form.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['contactUs'] = ContactUs.objects.get(pk=1)
        return context