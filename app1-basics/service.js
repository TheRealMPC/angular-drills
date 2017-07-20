angular.module('myTextApp').service('mainService', function($http){
  var text = [
    {text: ""}
  ]
  this.myText = function(){
    return text;
  }

  this.addText = function (data){
    // console.log(data);
    text.push(data);
    return true;
  }
});
