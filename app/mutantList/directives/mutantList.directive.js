(function(){
  'use strict';

    angular
      .module('mutantApp.mutantList')
      .directive('mlMutantForm',mlMutantForm);

      function mlHTML(){
        return{
          templateURL: 'app/mutantList/directives/mutantForm.html',
          restrict: 'E',
          controller: mlMutantFormController,
          controllerAs:'vm',
          scope:{

          },
        }
      }
      mlMutantFormController.$inject = [];
      function mlMutantFormController(){
        var vm = this;
        vm.addMutant = addMutant;
        vm.newMutant = new mutantService.Mutant();

        function addMutant() {
          vm.mutants.$add(vm.newMutant);
          vm.newMutant = new mutantService.Mutant();
        }

      }
})();
