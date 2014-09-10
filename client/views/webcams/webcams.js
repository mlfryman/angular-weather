/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Current Webcams';

    $scope.getConditions = function(){
      wu.getConditions($scope.zip).then(function(response){
        $scope.webcams = response.data.webcams;
      });
    };
  }]);
})();
