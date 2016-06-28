(function(){
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('mlMutantTable', mlMutantTable);

    function mlMutantTable(){
      return{
        templatUrl: 'app/mutantList/directives/mutantTable.html',
        restrict: 'E',
        controller: MutantTableController,
        controllerAs: 'vm',
        bindToController: true,
        scope:{
          mutants: '='
        },

      }
    }
    MutantTableController.$inject = ['textMessageService'];
    function MutantTableController(textMessageService){
      var vm = this;

      vm.deleteMutant = deleteMutant;
      vm.sendText = sendText;


      function deleteMutant(mutant) {
        vm.mutants.$remove(mutant);
      }
      function sendText(mutant) {
        textMessageService.sendText(mutant, vm.mutants);
      }
    }
})();
