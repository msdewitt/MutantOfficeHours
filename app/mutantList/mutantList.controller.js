(function(){
'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

MutantListController.$inject =['mutantService', 'fireBaseDataService', 'textMessageService'];
    function MutantListController(mutantService, fireBaseDataService, textMessageService){
        var vm = this;

        vm.mutants = mutantService.mutants;
        vm.newMutant = new mutantService.Mutant();
        vm.addMutant = addMutant;
        vm.toggleComplete = toggleComplete;
        vm.deleteMutant = deleteMutant;
        vm.sendText = sendText;

        function sendText(mutant){
          textMessageService.sendText(mutant, vm.mutants);
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
