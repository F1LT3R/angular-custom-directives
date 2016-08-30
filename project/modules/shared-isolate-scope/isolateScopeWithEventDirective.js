(function () {

  var app = angular.module('directivesModule');

  app.directive('isolateScopeWithEvent', function (){
    return {
      scope: {
        datasource: '=', // '=' two way data binding to object
        action: '&', // '&' callback function
      },
      template: 'Name: {{datasource.name}} Street: {{datasource.street}}' +
        '<br /><button ng-click="action()">' +
        'Change</button>',
    };
  });

}());

