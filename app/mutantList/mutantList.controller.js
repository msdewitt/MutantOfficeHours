(function(){
'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

MutantListController.$inject =['$firebaseArray'];
    function MutantListController($firebaseArray){
        var vm = this;
        var mutantsRef = firebase.database().ref().child('mutants');
        vm.mutants =$firebaseArray(mutantsRef);
        vm.newMutant = new Mutant();
        vm.addMutant = addMutant;

        function Mutant(){
          this.name = '';
          this.phone = '';
          this.topic = '';
          this.notified = false;
          this.complete = false;
        }

        function addMutant(){
          vm.mutants.$add(vm.newMutant);
        }
    }
})();
