var app = angular.module("app", []);

app.controller("emp",["$scope","$http",function($scope, $http){
  $scope.a = 10;
  $scope.b = 20;

  $scope.getSum = function(){
    // $scope.sum = parseInt($scope.a) + parseInt($scope.b);
    $http({
      url:"http://localhost:4467/Sum?a="+ $scope.a + "&b=" + $scope.b,
      method : "GET"
    }).then( function(resp){
        // success function
        debugger;
        $scope.sum = resp.data;
      }, function(resp){
        // failure function
        // alert("Server not responding")
        $scope.sum = "No resp from server !!";
      }
    )
  };
}]);
