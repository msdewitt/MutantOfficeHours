(function(){
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .config(configFunction);

    configFunction.$inject = ['$stateProvider'];
    function configFunction($stateProvider){
      $stateProvider.state('mutantList',{
        url:'/mutantList',
        templateUrl: 'app/mutantList/mutantList.html',
        controller: 'MutantListController',
        controllerAs:'vm'
      })
    }
})();
