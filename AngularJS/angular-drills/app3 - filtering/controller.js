angular.module('thisIsMyApp').controller('mainCtrl', function ($scope, mainService) {
    $scope.employees = mainService.getData();
})