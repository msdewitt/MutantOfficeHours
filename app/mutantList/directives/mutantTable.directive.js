(function(){
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('mlMutantTable', mlMutantTable);

    function mlMutantTable(){
      return{
        templatUrl: 'app/mutantList/directives/mutantTable.html',
        restrict: 'E',

      }
    }
})();
