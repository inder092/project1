var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '12login.html'
    })
    .when('/dashboard', {
        template: '12dashboard.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('loginCtrl', function($scope, $location){
    
    $scope.submit = function(){
      var uname =  $scope.username;
      var password = $scope.password;
      if($scope.username == 'admin' && $scope.password == 'password'){
          $location.path('/dashboard');
      }
    };
    
});