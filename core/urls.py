from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from . import views as views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    # path('services/', views.ServicesView.as_view(), name='services'), TODO временно скрыто
    path('exhibitions/', views.ExhibitionsView.as_view(), name='exhibitions'),
    path('contacts/', views.ContactsView.as_view(), name='contacts'),
    path('dealers/', views.DealersView.as_view(), name='dealers'),
    path('investors/', views.InvestorsView.as_view(), name='investors'),
    path('search/', views.SearchView.as_view(), name='search'),


    # path('in-motion/', views.InMotionView.as_view(), name='in_motion'),
    # path('allure-med-970/', views.AllureMedView.as_view(), name='allure-med'),
    # path('miracle/', views.MiracleView.as_view(), name='miracle'),
    # path('monster/', views.MonsterView.as_view(), name='monster'),

    path('en/', views.EnIndexView.as_view(), name='en_index'),
    # path('en/services/', views.EnServicesView.as_view(), name='en_services'), TODO временно скрыто
    path('en/exhibitions/', views.EnExhibitionsView.as_view(), name='en_exhibitions'),
    path('en/contacts/', views.EnContactsView.as_view(), name='en_contacts'),
    path('en/dealers/', views.EnDealersView.as_view(), name='en_dealers'),
    path('en/investors/', views.EnInvestorsView.as_view(), name='en_investors'),
    path('en/search/', views.EnSearchView.as_view(), name='en_search'),

    path('<slug:slug>/', views.ProductView.as_view(), name='product'),
    path('<slug:version>/<slug:slug>/', views.EnProductView.as_view(), name='en_product'),
    # path('en/in-motion/', views.EnInMotionView.as_view(), name='en_in_motion'),
    # path('en/allure-med-970/', views.EnAllureMedView.as_view(), name='en_allure-med'),
    # path('en/miracle/', views.EnMiracleView.as_view(), name='en_miracle'),
    # path('en/monster/', views.EnMonsterView.as_view(), name='en_monster'),

    path('api/send_message/', views.send_message, name='send_message')

] + static(settings.FILES_URL, document_root=settings.FILES_ROOT) \
              + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
