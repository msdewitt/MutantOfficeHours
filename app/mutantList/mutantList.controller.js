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
        vm.toggleComplete = toggleComplete;

        function toggleComplete(mutant){
          vm.mutants.$save(mutant);
        }

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
