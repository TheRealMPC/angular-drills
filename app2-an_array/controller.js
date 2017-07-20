angular.module('arrayApp').controller('arrayController', function($scope, arrayService){
  $scope.arrayList = arrayService.getArrayList();
});
