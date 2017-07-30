var app = angular.module("sample",[])

app.controller("emp",["$scope", function ($scope) {
  $scope.a = 10
  $scope.b = 20

  $scope.doDoubleAndSum = function(){
    $scope.a = $scope.a * 2
    $scope.b = $scope.b * 2
    $scope.sum = $scope.a + $scope.b
  }
}]);
