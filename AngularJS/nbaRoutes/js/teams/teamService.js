var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
    this.addNewGame = function (gameObj) {
        var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;

        if (parseInt("gameObj.homeTeam") > parseInt("gameObj.opponentScore")) {
            gameObj.won = true;
        }
        else if (parseInt("gameObj.homeTeam") < parseInt("gameObj.opponentScore")) {
            gameObj.won = false;
        }
    }
});