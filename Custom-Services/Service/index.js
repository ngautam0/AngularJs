var app = angular.module("app", []);

app.controller("emp",["$scope","calcService",function($scope, calcService){
  $scope.a = 10;
  $scope.b = 20;

  $scope.getSum = function(){

    // $scope.sum = calcService.getSum($scope.a, $scope.b)

    //  using callback
    calcService.getSum($scope.a, $scope.b, function(result){
      $scope.sum = result;
    });
  };
}]);


app.service("calcService", ["$http", "$log", function($http, $log){
  $log.log("Instantiating calcService");


  // this.getSum = function(a,b){
  //   return parseInt(a) + parseInt(b);
  // }

  // using callback
  //
  // this.getSum = function(a,b, callback){
  //   return callback(parseInt(a) + parseInt(b))
  // };

  // calling a rest API
  this.getSum = function(a,b, callback){
    $http({
      url:"http://localhost:4467/Sum?a="+ a + "&b=" + b,
      method : "GET"
    }).then(function(resp){
      $log.log(resp.data);
      callback(resp.data);
    }, function(resp){
      $log.error("Error Occurred");
    })
  }
}]);
