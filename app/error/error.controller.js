(function(){
  'use strict';
  angular
    .module('mutantApp.error')
    .controller('ErrorInputController', ErrorInputController);

    ErrorInputController.$inject = ['$scope'];
    function ErrorInputController(){
      $scope.errorForm = errorForm;
      $scope.textInput = textInput;
    }
})();
