var app = angular.module('ecommerce', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope) {
        $scope.posts = [
            { title: 'Basic Top', price: 19 },
            { title: 'Relaxed Work Top', price: 39 },
            { title: 'Fitted Bodysuit', price: 29 },
            { title: 'Button Collared Sweater', price: 49 },
            { title: 'Silk Tank Top', price: 49 },
        ];
    }
]);