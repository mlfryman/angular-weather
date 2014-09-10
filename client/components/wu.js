// this is a factory!

(function(){
  'use strict';

  angular.module('weather')
  .factory('wu', ['$http', function($http){
    // getUrl('conditions', '37203'); how you would call this function
    function getUrl(service, zip){
      return 'http://api.wunderground.com/api/f62d84d2f24e71aa/' + service + '/q/' + zip + '.json?callback=JSON_CALLBACK';
    }

    //get URL for conditions
    function getConditions(zip){
      var url = getUrl('conditions', zip);
      return $http.jsonp(url);
    }

    // get URL for webcams
    function getWebcams(zip){
      var url = getUrl('webcams', zip);
      return $http.jsonp(url);
    }

    // get URL for tenday
    function getTenDay(zip){
      var url = getUrl('forecast10day', zip);
      return $http.jsonp(url);
    }

    return {getConditions:getConditions, getWebcams:getWebcams, getTenDay:getTenDay};
  }]);
})();
