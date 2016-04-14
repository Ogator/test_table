(function () {
  "use strict";


angular.module('app.Modules.Layout', [])
  .controller('LayoutCtrl', function($scope, $state, $log, $q, $mdSidenav, $mdToast, NavigationService){

    $scope.navItems = [];
    $scope.title = $state.current.data.title;

    NavigationService.loadNavItems()
      .then(function(items) {
        $scope.navItems = items;
      });

    var selectNavItem = function(item) {
      $scope.title = item.title;
      showTitleToast($scope.title);
      toggleNaviBar();
    };


    var toggleNaviBar = function() {
      $mdSidenav('left').toggle();
    };

    var showTitleToast = function(title) {
      $mdToast.show(
        $mdToast.simple()
          .content(title)
          .hideDelay(2000)
          .position('bottom right')
      );
    };

    $scope.selectNavItem = selectNavItem;
    $scope.toggleNaviBar = toggleNaviBar;
    $scope.showTitleToast = showTitleToast;
  });
}());
