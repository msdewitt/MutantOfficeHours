(function(){
'use strict';

angular
  .module('mutantApp.auth')
  .factory('authService',authService);

  authService.$inject =['$firebaseAuth', '$state'];
  function authService($firebaseAuth, $state){
    var auth = $firebaseAuth();

    var service = {

      register: register,

    };

    return service;

    ////////////
    function register(user){
      return auth.$createUserWithEmailAndPassword(user.email,user.password);
    }
  }
})();
