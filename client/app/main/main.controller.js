'use strict';

angular.module('assignment3TestAppApp')
    .controller('MainCtrl', function($scope, $http, socket) {
        $scope.awesomeThings = [];

        $http.get('/api/things').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
            socket.syncUpdates('thing', $scope.awesomeThings);
        });

        $scope.addThing = function() {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', {
                name: $scope.newThing,
                name1: $scope.newThing1,
                name2: $scope.newThing2,
                name3: $scope.newThing3
            });
            $scope.newThing = '';
            $scope.newThing1 = '';
            $scope.newThing2 = '';
            $scope.newThing3 = '';
        };

        $scope.deleteThing = function(thing) {
            $http.delete('/api/things/' + thing._id);
        };

        $scope.$on('$destroy', function() {
            socket.unsyncUpdates('thing');
        });
    });