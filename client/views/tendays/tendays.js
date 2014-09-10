/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('TendayController', ['$scope', 'wu', function($scope, wu){
    $scope.title = '10-Day Forecast';

    $scope.getTenDay = function(){
      wu.getTenDay($scope.zip).then(function(response){
        $scope.forecasts = response.data.forecast.txt_forecast.forecastday;
      });
    };
  }]);
})();
