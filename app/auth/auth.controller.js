(function(){
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

    AuthController.$inject = ['$firebaseAuth', '$state'];
    function AuthController($firebaseAuth, $state){
      var vm = this;
      var auth = $firebaseAuth();

      vm.logout= logout;
      vm.login = login;
      vm.register = register;
      vm.user = {
        email:'',
        password:''
      };

      function register(user){
        return auth.$createUserWithEmailAndPassword(user.email, user.password)
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
