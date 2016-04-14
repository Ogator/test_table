(function () {
  "use strict";


angular.module('app.Services.ReceiptsService', [])
  .service('ReceiptsService', function($log, $q){

    var _receipts = [];
    var _rec_filtered = [];
    var _initDemoReceipts = function() {
      var type = ['Вода', 'Газ', 'Электричество', 'Сервисы'];
      var status = ['Оплачено', 'Не оплачено'];
      var startDate = new Date(2012, 1, 1);
      for(var idx = 0; idx < 50; idx++) {
        var dateFrom = new Date(startDate);
        dateFrom.setMonth(dateFrom.getMonth() + idx);
        var dateTo = new Date(startDate);
        dateTo.setMonth(dateTo.getMonth() + idx + 1);

        var receipt = {
          idx: idx + 1,
          type: type[Math.floor(Math.random() * 4)],
          dateFrom: dateFrom,
          dateTo: dateTo,
          paymentSum: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
          status: status[Math.floor(Math.random() * 2)]
        };
        _receipts.push(receipt);
      }
    };
    _initDemoReceipts();

    var _get = function(query) {
      $log.debug(JSON.stringify(query));
      var d = $q.defer();

      //---- FILTER out elements
      _rec_filtered = _receipts;
      if(query.filters.typeFilter != null) _rec_filtered = _rec_filtered.filter(_filterByType, query.filters.typeFilter);
      if(query.filters.periodFromFilter != null) _rec_filtered = _rec_filtered.filter(_filterByDateFrom, query.filters.periodFromFilter);
      if(query.filters.periodToFilter != null) _rec_filtered = _rec_filtered.filter(_filterByDateTo, query.filters.periodToFilter);
      if(query.filters.paymentTotalFilter != null) _rec_filtered = _rec_filtered.filter(_filterByPaymentSum, query.filters.paymentTotalFilter);
      if(query.filters.statusFilter != null) _rec_filtered = _rec_filtered.filter(_filterByStatus, query.filters.statusFilter);

      //---- SORT the result
      var orderChar = query.order.charAt(0);
      var orderDirection = true;
      orderDirection = orderChar !== "-";

      _rec_filtered.sort(function (a, b) {
        if(orderDirection) {
          switch (query.order) {
            case "idx":
              return a.idx - b.idx;
            case "type":
              return a.type.localeCompare(b.type);
            case "dateFrom":
              var aDateFrom = new Date(a.dateFrom);
              var bDateFrom = new Date(b.dateFrom);
              return aDateFrom.getTime() - bDateFrom.getTime();
            case "dateTo":
              var aDateTo = new Date(a.dateTo);
              var bDateTo = new Date(b.dateTo);
              return aDateTo.getTime() - bDateTo.getTime();
            case "paymentSum":
              return a.paymentSum - b.paymentSum;
            case "status":
              return a.status.localeCompare(b.status);
          }
        } else {
          var negOrder = query.order.substring(1);
          switch (negOrder) {
            case "idx":
              return b.idx - a.idx;
            case "type":
              return b.type.localeCompare(a.type);
            case "dateFrom":
              var aDateFrom = new Date(a.dateFrom);
              var bDateFrom = new Date(b.dateFrom);
              return bDateFrom.getTime() - aDateFrom.getTime();
            case "dateTo":
              var aDateTo = new Date(a.dateTo);
              var bDateTo = new Date(b.dateTo);
              return bDateTo.getTime() - aDateTo.getTime();
            case "paymentSum":
              return b.paymentSum - a.paymentSum;
            case "status":
              return b.status.localeCompare(a.status);
          }
        }
      });

      //---- SLICE 'em up and return the requested page
      var page = query.page;
      var limit = query.limit;
      var idxEnd = page * limit - 1;
      var idxStart = idxEnd - limit + 1;

      if (idxStart > _receipts.length - 1) {
        d.resolve([]);
      }
      if(idxEnd > _receipts.length - 1) {
        idxEnd = _receipts.length - 1;
      }
      var receiptArray = _rec_filtered.slice(idxStart, idxEnd + 1);
      d.resolve(receiptArray);

      return d.promise;
    };

    var _count = function() {
      return _rec_filtered.length;
    };

    var _filterByType = function(value) {
      return value.type.localeCompare(this) == 0;
    };

    var _filterByDateFrom = function(value) {
      return value.dateFrom > this;
    };

    var _filterByDateTo = function(value) {
      return value.dateTo < this;
    };

    var _filterByPaymentSum = function(value) {
      return value.paymentSum > this;
    };

    var _filterByStatus = function(value) {
      return value.status.localeCompare(this) == 0;
    };

    var service = {
      get: _get,
      count: _count
    };
    return service;

  });
}());
