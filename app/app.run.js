(function () {
  "use strict";


angular.module('app')
.run(function($rootScope, $state){
  $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
    //TODO extend state transition to include stateparams
    to.prevState = from.name;
  });
});
}());
