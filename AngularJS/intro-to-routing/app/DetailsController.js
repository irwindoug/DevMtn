var app = angular.module('app');


app.controller('DetailsController', function ($scope, $routeParams, DataService) {
    $scope.personId = personId;
    scope.activity = $routeParams.activity;

});