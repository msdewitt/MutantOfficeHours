(function(){
  'use strict';
  angular.module('mutantApp.timestamp')
  .directive('mlTimestamp', mlTimestamp);


  mlTimestamp.$inject = ['$interval', 'dateFilter']
  function mlTimestamp($interval, dateFilter){
    var format = 'h:mm:ss a';
    function link(scope, element, attrs) {
      var format,
          timeoutId;

      function updateTime() {
        element.text(dateFilter(new Date(), format));
      }

      scope.$watch(attrs.mlTimestamp, function(value) {
        format = value;
        updateTime();
      });

      element.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });

      // start the UI update process; save the timeoutId for canceling
      timeoutId = $interval(function() {
        updateTime(); // update DOM
      }, 1000);
    }

    return {
      link: link
    };
  }
})();
