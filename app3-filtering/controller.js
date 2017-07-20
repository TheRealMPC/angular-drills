angular.module('myApp').controller('myCtrl', function($scope, myService){
  $scope.newData = myService.getData();
});
