/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Current Conditions';

    $scope.getConditions = function(){
      var url='http://api.wunderground.com/api/f62d84d2f24e71aa/conditions/q/' + $scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        $scope.temperature = response.data.current_observation.temp_f;
      });
    };
  }]);
})();
