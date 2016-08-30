# Course Assigments - AngularJS Custom Directives

Udemy Course: [https://www.udemy.com/angularjs-custom-directives](https://www.udemy.com/angularjs-custom-directives)

## Notes

### Module 3


**Isolate Scope Properties**

    scope: { name: '@' } > <my-directive name="{{name}}" />
    scope: { name: '=' } > <my-directive name="name" />
    scope: { name: '&' } > <my-directive click="click()" />

