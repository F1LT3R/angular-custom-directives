(function () {

  var app = angular.module('directivesModule', []);

  app.directive('helloWorld', function (){
    // (DDO)
    return {
      template: 'Hello World'
    };
  });

}());

