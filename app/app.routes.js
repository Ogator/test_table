(function () {
  "use strict";


angular.module('app.Routes', [])
.config(function ($stateProvider) {
  $stateProvider
    .state('root', {
      abstract:true,
      views: {
        '@' : {
          templateUrl: 'modules/layout/layout.html',
          controller: 'LayoutCtrl'
        }
      }
    })
    .state('root.receipts', {
      url: '/receipts',
      templateUrl: 'modules/receipts/list/receipts.list.html',
      controller: 'ReceiptsListCtrl',
      data: {
        title: 'Мои Квитанции'
      }
    })
    .state('root.receipts-details', {
      url: '/receipt/:receiptId',
      templateUrl: 'modules/receipts/details/receipts.details.html',
      controller: 'ReceiptsDetailsCtrl',
      data: {
        title: 'Квитанция #'
      }
    });

});
}());
