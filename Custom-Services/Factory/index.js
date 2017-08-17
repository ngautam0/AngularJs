var app = angular.module("app", []);

app.controller("emp",["$scope","calcFactory",function($scope, calcFactory){
  $scope.a = 10;
  $scope.b = 20;

  $scope.getSum = function(){

    // $scope.sum = calcFactory.getSum($scope.a, $scope.b)

    // using callback
    calcFactory.getSum($scope.a, $scope.b, function(result){
      $scope.sum = result;
    });
  };
}]);


app.factory("calcFactory", ["$http", "$log", function($http, $log){
  $log.log("Instantiating Factory");

  var oCalcFactory = {}

  // oCalcFactory.getSum = function(a,b){
  //   return parseInt(a) + parseInt(b);
  // }

  // using callback

  // oCalcFactory.getSum = function(a,b, callback){
  //   return callback(parseInt(a) + parseInt(b))
  // };

  // calling a rest API
  oCalcFactory.getSum = function(a,b, callback){
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
  return oCalcFactory;
}]);
