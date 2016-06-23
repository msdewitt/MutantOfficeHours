(function(){
'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

MutantListController.$inject =['$firebaseArray', 'mutantService'];
    function MutantListController($firebaseArray, mutantService){
        var vm = this;
        var mutantsRef = firebase.database().ref().child('mutants');
        var textRef = firebase.database().ref().child('texts');

        vm.mutants =$firebaseArray(mutantsRef);
        vm.newMutant = new mutantService.Mutant();
        vm.addMutant = addMutant;
        vm.toggleComplete = toggleComplete;
        vm.deleteMutant = deleteMutant;
        vm.sendText = sendText;

        function sendText(mutant){

          var newText = {
            topic: mutant.topic,
            name: mutant.name,
            phone: mutant.phone
          };
          textRef.push(newText);
          mutant.notified = true;
          vm.mutants.$save(mutant);
        }

        function deleteMutant(mutant){
          vm.mutants.$remove(mutant);
        }

        function toggleComplete(mutant){
          vm.mutants.$save(mutant);
        }

        function addMutant(){
          vm.mutants.$add(vm.newMutant);
          vm.mutant = new mutantService.Mutant();
        }
    }
})();
