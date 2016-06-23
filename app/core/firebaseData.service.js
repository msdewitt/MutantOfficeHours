(function(){
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('fireBaseDataService', fireBaseDataService);

      function fireBaseDataService(){

        var root = firebase.database().ref()

        var service = {
          root:root,
          texts: root.child('texts'),
          mutants: root.child('mutants'),


        }

        return service;

        //////////////////


      }


})();
