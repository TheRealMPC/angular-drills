angular.module('myTextApp').controller('MainController', function ($scope, mainService){
  $scope.myText = mainService.myText();
  $scope.addText = function () {
    var newText = {
      text: $scope.newText
    }
    if(mainService.addText(newText))
  {
    $scope.newText = '';
  }
}
});
