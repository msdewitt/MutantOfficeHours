(function() {
  'use strict';

  angular
    .module('mutantApp.profile')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {
    $stateProvider.state('profile', {
      url: '/profile',
      templateUrl: 'app/userProfile/userProfile.html', //Make the template file
      controller: 'ProfileController', //Make the controller file
      controllerAs: 'vm'
    });
  }
})();
