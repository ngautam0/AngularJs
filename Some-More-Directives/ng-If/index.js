var app = angular.module("app", []);

app.controller("emp",["$scope",function($scope){
  $scope.a = 10;
  $scope.arr = [1,2,3,4,5,6,7]
}]);
