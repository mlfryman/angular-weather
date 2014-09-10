(function(){
  'use strict';
//('weather', []) creates new module; ('weather') uses existing module, ('weather', [dependency]) brings in dependencies
  angular.module('weather', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/conditions', {templateUrl:'/views/conditions/conditions.html', controller:'ConditionsController'}) // route: 'name of URL', {templateUrl:'________', controller:'________'})
    .when('/webcams', {templateUrl:'/views/webcams/webcams.html', controller:'WebcamsController'})
    .otherwise({redirectTo:'/conditions'}); // if you give me a URL that don't recognize, I'll return this
  }])// configuration for weather module
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Angular Weather';
  }]);
})();
