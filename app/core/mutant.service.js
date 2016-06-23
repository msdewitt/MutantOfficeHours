(function(){
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('mutantService', mutantService);

    mutantService.$inject = ['$firebaseArray', 'fireBaseDataService'];

    // mutantService.$inject = [];
    function mutantService($firebaseArray, fireBaseDataService){
      var service = {
        Mutant: Mutant,
        mutants: $firebaseArray(fireBaseDataService.root.child('mutants')),
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
