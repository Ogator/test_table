(function () {
  "use strict";


angular.module('app.Modules.Receipts.Details', [])
  .controller('ReceiptsDetailsCtrl', function($state, $stateParams, $scope, $log, DashService){

    DashService.setDashTitle($state.current.data.title + $stateParams.receiptId);
    var goBack = function() {
      $state.go($state.current.prevState, {}, { reload: true });
    };
    $scope.goBackAction = [
      {
        icon: 'backburger',
        arialabel: 'Назад',
        handler: goBack
      }
    ];
    DashService.setDashActions($scope.goBackAction);

  });
}());
