(function(){
  'use strict';
  angular
    .module('mutantApp.error')
    .directive('mlError',mlError);

    function mlError(){
      return{
        templateUrl: 'app/error/error.html',
        restrict: 'E',
        controllerUrl:'app/error/error.controller.js',
        scope:{
          errorForm: '@',
          textInput: '@',
        }
      }
    }
})();
