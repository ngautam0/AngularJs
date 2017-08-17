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


app.provider("calcService",function(){

  var baseUrl = ""

  this.config = function(url){
    baseUrl = url;
  };

  this.$get = ["$log","$http", function($log,$http){
    $log.log("Instantiating calcService provider");
    var oCalcService = {}


    // oCalcService.getSum = function(a,b){
    //   return parseInt(a) + parseInt(b);
    // };
    //using callback
    // oCalcService.getSum = function(a,b, callback){
    //   return callback(parseInt(a) + parseInt(b))
    // };

    // calling a rest API
    oCalcService.getSum = function(a,b, callback){
      $http({
        url:baseUrl + "Sum?a="+ a + "&b=" + b,
        method : "GET"
      }).then(function(resp){
        $log.log(resp.data);
        callback(resp.data);
      }, function(resp){
        $log.error("Error Occurred");
      })
    }
    return oCalcService;

  }];
});

app.config(['calcServiceProvider', function(calcServiceProvider){
  calcServiceProvider.config("http://localhost:4467/")
}]);
