angular.module('apiApp').controller('mainCtrl', function ($scope, mainService) {


    $scope.starships = mainService.getStarships().then(function (starships) {
        $scope.starships = starships.results;
    });
})