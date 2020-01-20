from django.views.generic import TemplateView


class MainTemplateView(TemplateView):
    template_name = 'djgui/index.html'


class MyAccountInfoTemplateView(TemplateView):
    template_name = 'djgui/my_account_info.html'


class WattupTemplateView(TemplateView):
    template_name = 'djgui/wattup.html'


class ShoppingListTemplateView(TemplateView):
    template_name = 'djgui/shopping_list.html'
