'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($q, $http) {
    
    this.getMessages = function() {
      var dfd = $q.defer();
      $http.get('http://127.0.0.1:8599').then(function(response) {
        response=response.data;
        dfd.resolve(response);
      });
      
      return dfd.promise;
    }
    
    this.sendMessage = function(msg, uName, uImage) {
      var dfd = $q.defer();
      if(!uImage) {
        uImage = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQH-mMetlmweAmhnH-EQ9LVUca4_wekwlnEKeYm_5S7SX2X0u2dkYe0NM4w';
      }
      if(!uName) {
        uName = 'No-Name'
      }
      $http.post('http://127.0.0.1:8599', {message: msg, user: uName, image: uImage}).then(function(response) {
        console.log("Send Response", response);
        dfd.resolve(null, response);
      })
      return dfd.promise;
    }
    
  });
