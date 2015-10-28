var app = angular.module('friendsList');
app.contoller('mainCtrl', function ($scope) {



    $scope.addFriend = function () {
        var frnd = $scope.newFriend;
        $scope.friend.push(frnd);

    }
});
