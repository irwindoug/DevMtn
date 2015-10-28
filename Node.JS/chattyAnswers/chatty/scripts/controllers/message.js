'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = ['Default Message'];
    
    
    var populateMessages = function () {
        MessageService.getMessages().then(function(msgs) {
          $scope.messages = msgs;
        })
    }
    
    
    $scope.sendMessage = function(message) {
      //make sure they actually have a good message
      console.log('click');
      if(!message)
        return;
        console.log("send");
      //Send message to service
      MessageService.sendMessage(message,$scope.myUsername, $scope.myImageUrl).then(function(error, response){
        if(error) {
          //uh oh
          // console.error(error.toString());
        }else{
          console.info('Message sent successfully', response);
          $scope.newMessage = '';
        }
      })
    }
    
    
    populateMessages();
    
    window.setInterval(populateMessages, 1000);
    
  });
