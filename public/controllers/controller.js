var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

person1= {
name: 'Etka',
email: 'Etkinator@email.com',
number: '(777) 121-4321'
};

person2 = {
name: 'Cuma',
email: 'cuma93@live.de',
number: '0177 5885523'
};

person3 = {
name: 'Aman',
email: 'Playboy@live.de',
number: '0124 0234233'

};

var contactlist = [person1, person2, person3];
$scope.contactlist = contactlist;

    }]);﻿

