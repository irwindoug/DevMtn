angular.module('apiApp').service('mainService', function ($http) {
    
    var rootStarshipsUrl = "http://swapi.co/api/starships/";
    
    this.getStarships= function () {
        return $http({
            method: 'GET',
            url: rootStarshipsUrl
        }).then(function (webResponse) {
            if (!webResponse.status) {
                console.log("Tis broken")
            }
            return webResponse.data;
        })
    }
})