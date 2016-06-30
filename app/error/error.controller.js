(function(){
  'use strict';
  angular
    .module('mutantApp.error')
    .controller('ErrorInputController', ErrorInputController);

    ErrorInputController.$inject = ['$scope'];
    function ErrorInputController(){
      var vm = this;
      $scope.errorForm = errorForm;
      $scope.textInput = textInput;
    }
})();
