var app = angular.module('quoteBook');

app.controller('mainCtrl', function ($scope, mainService) {
    $scope.getData = function () {
        $scope.data = mainService.getData();
    }

        //$scope.add = mainService.addData();
        //$scope.removeData = mainService.removeData();
    $scope.addQuotes = function () {
        mainService.addData($scope.addQuote);
        $scope.addQuote = '';
    }


    /*$('button').change(function () {
        $('add').toggle($(this).val() === 'a');
        $('remove').toggle($(this).val() === 'r');
        $('filter').toggle($(this).val() === 'f');
    });*/


    $scope.getData();

    
});