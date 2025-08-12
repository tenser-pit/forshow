from django.contrib import admin
from reversion.admin import VersionAdmin
from adminsortable2.admin import SortableAdminMixin

from .models import AmoCrm, MainPageSlide, Contacts, ContactUs, Services, \
                    Dealers, Investors, Exhibitions, SidebarMenu, Products


@admin.register(AmoCrm)
class AmoCrmAdmin(admin.ModelAdmin):
    pass


@admin.register(MainPageSlide)
class MainPageSlideAdmin(SortableAdminMixin, VersionAdmin):
    list_display = ['title', 'image_tag',]


@admin.register(ContactUs)
class ContactUsAdmin(VersionAdmin):
    list_display = ['title', 'title_ru']


@admin.register(Contacts)
class ContactsAdmin(VersionAdmin):
    list_display = ['title', 'title_ru']


@admin.register(Services)
class ServicesAdmin(VersionAdmin):
    list_display = ['title', 'title_ru']


@admin.register(Dealers)
class DealersAdmin(VersionAdmin):
    list_display = ['title', 'title_ru']


@admin.register(Investors)
class InvestorsAdmin(VersionAdmin):
    list_display = ['title', 'title_ru']


@admin.register(Exhibitions)
class ExhibitionsAdmin(VersionAdmin):
    list_display = ['link', 'sidebar_title', 'sidebar_title_ru']


@admin.register(SidebarMenu)
class SidebarMenuAdmin(VersionAdmin):
    list_display = ['id']


@admin.register(Products)
class ProductsAdmin(VersionAdmin):
    list_display = ['version', 'title']
    list_filter = ['version']
