(function(){

'use strict';

angular
  .module('mutantApp.core')
  .service('textMessageService', textMessageService);

textMessageService.$inject = ['fireBaseDataService'];
  function textMessageService(fireBaseDataService){
    var service = {
      sendText: sendText,
    }
    return service;

    ////////////////

    
    function sendText(mutant, mutants){

      var newText = {
        topic: mutant.topic,
        name: mutant.name,
        phone: mutant.phone
      };
      fireBaseDataService.texts.push(newText);
      mutant.notified = true;
      mutants.$save(mutant);
    }
  }

})();
