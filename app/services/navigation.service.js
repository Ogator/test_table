(function () {
  "use strict";

/**
 * @ngdoc service
 * @name app.Services.Navigation
 * @description
 * # navigation
 * Service in the example2App.
 */
angular.module('app.Services.NavigationService', [])
  .service('NavigationService', function ($q) {
    function _loadNavItems() {
      var d = $q.defer();
      var menuItems = [
        {
          title: 'Мои Квитанции',
          icon: 'receipt',
          sref: '.receipts'
        }
      ];
      d.resolve(menuItems);
      return d.promise;
    }

    var service = {
      loadNavItems: _loadNavItems
    };

    return service;
  });
}());
