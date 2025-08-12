from django.db import models
from filer.fields.image import FilerImageField
from django.utils.html import mark_safe
from easy_thumbnails.files import get_thumbnailer


class AmoCrm(models.Model):
    redirect_url = models.CharField(max_length=255, null=True)
    subdomain = models.CharField(max_length=255)
    amocrm_id = models.CharField(max_length=255)
    secret_key = models.TextField()
    access_code = models.TextField()
    refresh_token = models.TextField(blank=True, null=True)
    last_updated = models.DateTimeField(blank=True, null=True)

    class Meta:
        verbose_name = 'AMOCRM token'
        verbose_name_plural = 'AMOCRM tokens'


class MainPageSlide(models.Model):
    title = models.CharField(max_length=255, verbose_name='Slide title')
    title_ru = models.CharField(max_length=255, verbose_name='Заголовок слайда')

    description = models.TextField(verbose_name='Description')
    description_ru = models.TextField(verbose_name='Описание')

    percentage = models.IntegerField(verbose_name='Percentage')
    percentage_ru = models.IntegerField(verbose_name='Процент')

    text_button = models.TextField(verbose_name='Text on button')
    text_button_ru = models.TextField(verbose_name='Текст на кнопке')

    link_button = models.TextField(verbose_name='URL on button')
    link_button_ru = models.TextField(verbose_name='URL на кнопке')

    image = FilerImageField(on_delete=models.SET_NULL, verbose_name='Image slide', related_name='slide', null=True, blank=True)
    image_ru = FilerImageField(on_delete=models.SET_NULL, verbose_name='Картинка слайда', related_name='slide_ru', null=True, blank=True)

    order = models.PositiveIntegerField(default=0, db_index=True)

    def image_tag(self):
        if self.image:
            options = {'size': (45, 45), 'crop': True}
            image_url = get_thumbnailer(self.image).get_thumbnail(options).url
            return mark_safe(f'<img src="{image_url}"/>')
        else:
            return 'No Image Found'

    image_tag.short_description = 'Image'

    class Meta:
        ordering = ('order',)
        verbose_name = 'слайд'
        verbose_name_plural = 'Слайды на главной страницы'


class ContactUs(models.Model):
    title = models.CharField(max_length=255, verbose_name='Title')
    title_ru = models.CharField(max_length=255, verbose_name='Заголовок')

    subtitle = models.TextField(verbose_name='Subtitle')
    subtitle_ru = models.TextField(verbose_name='Подзаголовок')

    content = models.TextField(verbose_name='Details')
    content_ru = models.TextField(verbose_name='Реквизиты')

    class Meta:
        verbose_name = 'contact us form/форма свяжитесь с нами'
        verbose_name_plural = 'Contact us form/Форма свяжитесь с нами'


class Contacts(models.Model):
    title = models.CharField(max_length=255, verbose_name='Title')
    title_ru = models.CharField(max_length=255, verbose_name='Заголовок')

    content = models.TextField(verbose_name='Main content')
    content_ru = models.TextField(verbose_name='Главный контент')

    class Meta:
        verbose_name = 'contacts/контакты'
        verbose_name_plural = 'Contact/Контакты'


class Services(models.Model):
    title = models.CharField(max_length=255, verbose_name='Title')
    title_ru = models.CharField(max_length=255, verbose_name='Заголовок')

    content = models.TextField(verbose_name='Main content')
    content_ru = models.TextField(verbose_name='Главный контент')

    class Meta:
        verbose_name = 'service/услуга'
        verbose_name_plural = 'Services/Услуги'


class Dealers(models.Model):
    title = models.CharField(max_length=255, verbose_name='title')
    title_ru = models.CharField(max_length=255, verbose_name='Заголовок')

    content = models.TextField(verbose_name='Main content')
    content_ru = models.TextField(verbose_name='Главный контент')

    class Meta:
        verbose_name = 'dealers/дилерам'
        verbose_name_plural = 'Dealers/Дилерам'


class Investors(models.Model):
    title = models.CharField(max_length=255, verbose_name='title')
    title_ru = models.CharField(max_length=255, verbose_name='Заголовок')

    content = models.TextField(verbose_name='Main content')
    content_ru = models.TextField(verbose_name='Главный контент')

    class Meta:
        verbose_name = 'investors/инвесторам'
        verbose_name_plural = 'Investors/Инвесторам'


class Exhibitions(models.Model):
    link = models.CharField(max_length=255, verbose_name='Ссылка')

    sidebar_title = models.CharField(max_length=255, verbose_name='Sidebar title')
    sidebar_title_ru = models.CharField(max_length=255, verbose_name='Заголовок на боковой панели')

    service_card = models.TextField(verbose_name='Service Card')
    service_card_ru = models.TextField(verbose_name='Сервисная карта')

    content = models.TextField(verbose_name='Main content')
    content_ru = models.TextField(verbose_name='Главный контент')

    class Meta:
        verbose_name = 'exhibitions/выставки'
        verbose_name_plural = 'Exhibitions/Выставки'


class SidebarMenu(models.Model):
    information_field = models.TextField(verbose_name='Sidebar information')
    information_field_ru = models.TextField(verbose_name='Информация на боковой панели')

    class Meta:
        verbose_name = 'sidebar/боковая панель'
        verbose_name_plural = 'Sidebar/Боковая панель'


class Products(models.Model):
    class Language(models.TextChoices):
        RU = '1', 'Ру'
        EN = '2', 'En'

    version = models.CharField(choices=Language.choices, default=Language.RU, max_length=2, verbose_name='Язык')
    slug = models.CharField(max_length=255, verbose_name='Ссылка')
    title = models.CharField(max_length=255, verbose_name='Заголовок')
    sidebar_content = models.TextField(verbose_name='Контент боковой панели')
    main_content = models.TextField(verbose_name='Главный контент')


    class Meta:
        verbose_name = 'продукты'
        verbose_name_plural = 'Продукты'