/**
 * Created by neox-ltd on 13/04/2016.
 */


angular.module('ngModelOnBlur', []).directive('ngModelOnBlur', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    priority: 1,
    link: function(scope, elm, attr, ngModelCtrl) {
      if (attr.type === 'radio' || attr.type === 'checkbox') return;

      elm.unbind('input').unbind('keydown').unbind('change');
      elm.bind('blur', function() {
        scope.$apply(function() {
          ngModelCtrl.$setViewValue(elm.val());
        });
      });
    }
  };
});
