angular.module('myApp', ['duScroll']).
    controller('MyCtrl', function($scope, $document){
        $scope.toTheTop = function() {
            $document.scrollTopAnimated(0, 300);
        }
    }).value('duScrollOffset', 75);