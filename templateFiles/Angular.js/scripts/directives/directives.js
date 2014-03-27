'use strict';

var directives = angular.module('myApp.directives', []);
directives.directive('appVersion', function(VersionInfo) {
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {
        elm.text(VersionInfo.appVersion);
      }
    };
  });