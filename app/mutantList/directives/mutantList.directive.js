(function(){
  'use strict';

    angular
      .module('mutantApp.mutantList')
      .directive('mlMutantForm',mlMutantForm);

      function mlMutantForm(){
        return{
          templateUrl: 'app/mutantList/directives/mutantForm.html',
          restrict: 'E',
          controller: MutantFormController,
          controllerAs:'vm',
          bindToController: true, //bind these to the controller directly, so you don't have to inject scope into the controller
          scope:{
            mutants: '='
          },
        }
      }
      MutantFormController.$inject = ['mutantService'];
      function MutantFormController(mutantService){
        var vm = this;
        vm.addMutant = addMutant;
        vm.newMutant = new mutantService.Mutant();

        function addMutant() {
          vm.mutants.$add(vm.newMutant);
          vm.newMutant = new mutantService.Mutant();
        }

      }
})();
