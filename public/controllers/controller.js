var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.ShowAddContact = true;


  var refresh = function() {
    $http.get('/reiseblogdata').then(function(response) {
      console.log("I got the data I requested");
      $scope.reiseblogdata = response.data;

    });
  };

  refresh();

  $scope.addContact = function() {
    console.log($scope.contact);
    $http.post('/reiseblogdata', $scope.contact).then(function(response) {
      console.log(response);
      $scope.contact = {};
      refresh();

    });
  };

  $scope.remove = function(id) {
    console.log(id);
    $http.delete('/reiseblogdata/' + id).then(function(response) {
      refresh();
    });
  };

  $scope.edit = function(id) {
    console.log(id);
    $http.get('/reiseblogdata/' + id).then(function(response) {
      $scope.contact = response.data;
      $scope.ShowUpdate = true;
      $scope.ShowAddContact = false;

    });
  };

  $scope.update = function() {
    console.log($scope.contact._id);
    $http.put('/reiseblogdata/' + $scope.contact._id, $scope.contact).then(function(response) {
      refresh();
      $scope.ShowUpdate = false;
      $scope.ShowAddContact = true;
      $scope.contact = {};

    })
  };



}]);﻿
