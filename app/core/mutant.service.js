(function(){
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('mutantService', mutantService);

    mutantService.$inject = ['$firebaseArray'];

    // mutantService.$inject = [];
    function mutantService($firebaseArray){
      var service = {
        Mutant: Mutant,
        mutants: $firebaseArray(firebase.database().ref().child('mutants')),
      };

      return service;

      /////////////////////
      function Mutant(){
        this.name = '';
        this.phone = '';
        this.topic = '';
        this.notified = false;
        this.complete = false;
      }


    }
})();
