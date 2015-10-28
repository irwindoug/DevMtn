var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/list', {
            template: "<div ng-repeat='person in people'><span ng-click='routeToPerson($index)'>{{person.name}}</div>",
            controller: 'ListController',
        })
        .when('/details/:personId', {
            templateUrl: 'app/templates/details_template.html',
            controller: 'DetailsController'
        })
        .when('/settings',{})
});