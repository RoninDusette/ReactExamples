from django.contrib import admin
from django.conf.urls import url
from django.urls import path
from django.urls import include
from rest_framework import routers
from ReactExamples.modules.MyAccountInfo.views import AccountViewSet
from ReactExamples.modules.ShoppingList.views import ListViewSet
from ReactExamples.modules.ShoppingList.views import ItemViewSet
from ReactExamples.modules.Wattup.views import MessageViewSet
from ReactExamples.modules.djgui.views import MainTemplateView


router = routers.DefaultRouter()
router.register(r'shopping-list', ListViewSet)
router.register(r'shopping-list-item', ItemViewSet)
router.register(r'account', AccountViewSet)
router.register(r'contact', MessageViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('main/', MainTemplateView.as_view(), name='main'),
]
