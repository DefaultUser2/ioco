angular.module('ioco-front-end.controllers', []).

/* Employees controller
Get list of employees */
controller('employeesController', function($scope, $http, $location) {

  //link to employee function
  $scope.goToLink = function(id) {
    console.log("go to link");
    console.log(id);
    $location.path('/employee/' + id);
  }

  $scope.nameFilter = null;
  $scope.driversList = [];

  //Filter function
  $scope.searchFilter = function(employees) {
    var re = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || re.test(employees.FirstName) || re.test(employees.LastName);
  };
  //console.log("start");
  //Get function to get all employees
  $http({
    method: 'GET',
    url: 'http://128.199.39.177:3000/listAll'
  }).then(function successCallback(response) {
    //console.log("response");
    //console.log(response.data);
    $scope.employeeList = response.data;
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    console.log("error");
    console.log(response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}).

/* Employee controller
   Get specific employee*/
controller('employeeController', function($scope, $routeParams, $http) {
//  console.log("link to employee");
  var id = $routeParams.id;
  $http({
    method: 'GET',
    url: 'http://128.199.39.177:3000/listEmployee?empid=' + id
  }).then(function successCallback(response) {
    //console.log("response");
    //console.log(response.data);
    $scope.employeeInfo = response.data[0];
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    console.log("error");
    console.log(response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


});

;
