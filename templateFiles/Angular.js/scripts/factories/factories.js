'use strict';
var factories = angular.module('myApp.factories', []);
factories.factory('VersionInfo', function() {
  return {
    appVersion: '0.0.1'
  };
});