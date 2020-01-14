angular.module('ioco-front-end', [
  'ioco-front-end.controllers',
  'ngRoute'
]).
//route to employees if wrong url is used
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/employees", {templateUrl: "partials/employees.html", controller: "employeesController"}).
	when("/employee/:id", {templateUrl: "partials/employee.html", controller: "employeeController"}).
	otherwise({redirectTo: '/employees'});
}]);
