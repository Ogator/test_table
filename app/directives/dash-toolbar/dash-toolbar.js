/**
 * Created by neox-ltd on 21/02/2016.
 */
(function () {
  "use strict";

/**
 * @ngdoc directive
 * @name dash-toolbar
 * @description
 * # Directive dashToolbar. TODO description
 */
angular.module('dash-toolbar', [])
  .service('DashService', function($rootScope) {

    var _dashData = {
      title: '',
      actions: []
    };

    var _setDashTitle = function(title) {
      if(typeof title === 'string') {
        _dashData.title = title;
      }
    };
    var _getDashTitle = function() {
      return _dashData.title;
    };

    var _setDashActions = function (actions) {
      if(!Array.isArray(actions)) {
        throw new Error('action must be array of actions! Please, see documentation');
      }
      _dashData.actions = actions;
      $rootScope.$emit('refreshDashActions', null);
    };

    var _getDashActions = function() {
      return _dashData.actions;
    };

    return {
      setDashTitle: _setDashTitle,
      getDashTitle: _getDashTitle,
      setDashActions: _setDashActions,
      getDashActions: _getDashActions
    };

  })
  .directive('dashToolbar', [ 'DashService', '$rootScope', function (DashService, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/dash-toolbar/dash-toolbar.html',
      link: function(scope) {
        scope.title = DashService.getDashTitle();
        scope.actions = DashService.getDashActions();
        var dashActionChangeListener = $rootScope.$on('refreshDashActions', function (event, data) {
          scope.title = DashService.getDashTitle();
          scope.actions = DashService.getDashActions();
          event.stopPropagation();
        });
        scope.$on('$destroy', function(){dashActionChangeListener();});
      }
    };
  }]);
}());
