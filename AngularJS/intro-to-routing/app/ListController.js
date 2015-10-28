var app = angular.module('app');


app.controller('ListController', function ($scope, DataService) {
    $scope.something = "This works";
    $scope.people = DataService.data;

    $scope.routeToPerson = function (idx) {
        $location.url('/details/' + idx);
    }
});