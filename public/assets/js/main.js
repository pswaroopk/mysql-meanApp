var consoleApp = angular.module('consoleApp', []);

consoleApp.controller('mainController',['$scope','$http', function($scope, $http) {
    $scope.formData = {};//use later
    $scope.searchResults = [];


    $scope.fetchUserProfile = function() {
      var searchQuery = '/api/users/?email='+ $scope.email_as +'&mobile=' + $scope.mobile_as;
      $http.get(searchQuery)
        .success(function(data) {
            $scope.searchResults = data.users;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };
}]);

consoleApp.directive('keypress', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.keypress);
                });
                event.preventDefault();
            }
        });
    };
});
