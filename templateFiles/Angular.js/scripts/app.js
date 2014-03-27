/*global angular*/
'use strict';
var myApp = angular.module('myApp', ['ngRoute', 'ngResource', 'myApp.services', 'myApp.factories', 'myApp.directives', 'myApp.controllers']);
myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'views/main.html'
    });
});