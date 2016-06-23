(function(){
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

    AuthController.$inject = ['$firebaseAuth', '$state', 'authService'];
    function AuthController($firebaseAuth, $state, authService){
      var vm = this;

      vm.logout= logout;
      vm.login = login;
      vm.register = register;
      vm.user = {
        email:'',
        password:''
      };

      function register(user){
        return authService.register(user)
        .then(function(){
          vm.login(user);
        })
        .catch(function(error){
          console.log(error);
        });
      }
      function login(user){
        return auth.$signInWithEmailAndPassword(user.email, user.password)
        .then(function(){
          $state.go('mutantList');
        })
        .catch(function(error){
          console.log(error);
        })
      }
      function logout(){
        auth.$signOut();
        $state.go('home');

      }

    }

})();
