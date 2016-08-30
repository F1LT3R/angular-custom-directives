(function () {

  var app = angular.module('directivesModule');

  app.directive('isolateScopeWithString', function (){
    return {
      scope: {
        name: '@', // '@' one way string only (or json stringified)
        // name: '@fullname', // (map external `fullname` to internal `name`)
      },
      template: 'Name: {{name}}'
    };
  });

}());

