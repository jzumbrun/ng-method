ng-method
=========

The missing Angular JS method functionality.

To conform to existing routing systems like Rails, the ability to define the method in the route is now available.

Use ```method: 'myCoolMethod'``` in your route, and add ```ng-method=''``` in your template and the method from the route will call ```$scope.myCoolMethod()```. If the ```ng-method``` has a value, ie ```ng-method='someOtherMethod'``` the route method will be ignored and ```$scope.someOtherMethod()``` will be called. The method will be called without parameters. Use $routeParams as a method to pass data.

Install
========

Due to ngMethod being a simple directive no injection is needed. Just add the code and use.
