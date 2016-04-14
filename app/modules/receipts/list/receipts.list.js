(function () {
  "use strict";


  angular.module('app.Modules.Receipts.List', [])
    .controller('ReceiptsListCtrl', function($state, $scope, $log, DashService, ReceiptsService) {

      DashService.setDashTitle($state.current.data.title);
      DashService.setDashActions([]);

      $scope.selectedReceipt = [];
      $scope.receipts = [];

      $scope.receiptTypes = ['Вода', 'Газ', 'Электричество', 'Сервисы'];
      $scope.statusTypes = ['Оплачено', 'Не оплачено'];

      $scope.paginationLabels = {page: 'Страница:', rowsPerPage: 'Записей на странице:', of: 'из'};
      $scope.rowOptions = [10, 20, 50, 100];

      $scope.filters = {
        typeFilter: null,
        periodFromFilter: null,
        periodToFilter: null,
        paymentTotalFilter: null,
        statusFilter: null
      };
      $scope.clearFiltersDisabled = true;

      $scope.clearFilters = function() {
        $scope.filters = {};
        $scope.clearFiltersDisabled = true;
        getReceipts(angular.extend($scope.query, {filters: $scope.filters}));
      };

      $scope.query = {
        order: 'idx',
        limit: 10,
        page: 1,
        filters: {}
      };


      var getReceipts = function(query) {
        $scope.promise = ReceiptsService.get(query);
        $scope.promise
          .then(function(data) {
            $scope.receiptCount = ReceiptsService.count();
            $scope.receipts = data;
          });
      };

      $scope.setFilters = function () {
        $scope.clearFiltersDisabled = false;
        getReceipts(angular.extend($scope.query, {filters: $scope.filters}));
      };

      $scope.onPaginate = function (page, limit) {
        getReceipts(angular.extend($scope.query, {page: page, limit: limit}));
      };

      $scope.onReorder = function (order) {
        getReceipts(angular.extend($scope.query, {order: order}));
      };

      var getCount = function() {
        $scope.receiptCount = ReceiptsService.count();
      };

      $scope.showReceipt = function (idx) {
        $state.go('root.receipts-details', { receiptId: $scope.receipts[idx].idx });
      };
      getCount();
      getReceipts($scope.query);
    });
}());
