var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


    var refresh = function(){
  $http.get('/reiseblog').then (function(response) {
    console.log("I got the data I requested");
    $scope.reiseblog = response.data;
  console.log(response.data);
  });
};

refresh();

$scope.addContact = function(){
	console.log($scope.contact);
	$http.post('/reiseblog', $scope.contact).then(function(response){
		console.log(response);
		refresh();

	});
}


 }]);﻿

