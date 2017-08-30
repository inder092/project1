var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        template: 'Welcome'
    })
    .when('/1', {
        template: 'Welcome 1'
    })
    .otherwise({
        redirectTo: '/'
    });
});