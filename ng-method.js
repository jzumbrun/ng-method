app.directive('ngMethod', ['$route', function($route) {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {

            // Call method without params. Use $routeParams
            if(angular.isFunction(scope[attrs.ngMethod])){
                scope[attrs.ngMethod]();
            // default to the route method if attrs.ngMethod is empty
            } else if(angular.isObject($route.current) 
                && angular.isString($route.current['method']) 
                && angular.isFunction(scope[$route.current['method']])){
                scope[$route.current['method']]();
            }
        }
    };
}]);
