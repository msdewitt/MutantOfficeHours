(function(){
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('fireBaseDataService', fireBaseDataService);

      function fireBaseDataService(){

        var root = firebase.database().ref()

        var service = {
          root:root,


        }

        return service;

        //////////////////


      }


})();
