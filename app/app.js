(function () {
  "use strict";

  angular.module('app',
    ['ngAnimate',
      'ngCookies',
      'ngSanitize',
      'ui.router',
      'ngMaterial',
      'ngMessages',
      'md.data.table',
      'pascalprecht.translate',
      'app.Routes',
      'app.Services',
      'app.Modules',
      'app.Directives'])

    .config(function ($urlRouterProvider, $mdThemingProvider,
                      $mdIconProvider, $translateProvider, $mdDateLocaleProvider) {

      $urlRouterProvider.otherwise('/receipts');

      $mdThemingProvider
        .theme('default')
        .primaryPalette('grey', {
          'default': '600'
        })
        .accentPalette('teal', {
          'default': '500'
        })
        .warnPalette('defaultPrimary');

      $mdThemingProvider.theme('dark', 'default')
        .primaryPalette('defaultPrimary')
        .dark();

      $mdThemingProvider.theme('grey', 'default')
        .primaryPalette('grey');

      $mdThemingProvider.theme('custom', 'default')
        .primaryPalette('defaultPrimary', {
          'hue-1': '50'
        });

      $mdThemingProvider.definePalette('defaultPrimary', {
        '50':  '#FFFFFF',
        '100': 'rgb(255, 198, 197)',
        '200': '#E75753',
        '300': '#E75753',
        '400': '#E75753',
        '500': '#E75753',
        '600': '#E75753',
        '700': '#E75753',
        '800': '#E75753',
        '900': '#E75753',
        'A100': '#E75753',
        'A200': '#E75753',
        'A400': '#E75753',
        'A700': '#E75753'
      });

      $mdIconProvider.defaultIconSet("icons/mdi.svg");

      $translateProvider.useSanitizeValueStrategy('escape');
      $translateProvider.translations('ru', {
        'LOGIN_M_APP_TITLE': "Клиент"
      });
      $translateProvider.preferredLanguage('ru');

      $mdDateLocaleProvider.months = ['Январь', 'Февраль', 'Март',  'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сеньтябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      $mdDateLocaleProvider.shortMonths = ['Янв.', 'Фев.', 'Март',  'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Но.', 'Дек.'];
      $mdDateLocaleProvider.days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота', 'Воскресенье'];
      $mdDateLocaleProvider.shortDays = ['Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.', 'Вс.'];
    });
}());
