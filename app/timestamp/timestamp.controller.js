(function() {
  'use strict';

  angular
    .module('mutantApp.timestamp')
    .controller('TimestampController', TimestampController);

  TimestampController.$inject = ['$scope'];
  function TimestampController($scope){
    $scope.format = 'M/d/yy h:mm:ss a';
  }
})();
