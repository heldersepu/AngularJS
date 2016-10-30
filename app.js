(function () {
  'use strict';

  angular.module('test', [])
  .controller('ControllerOne', function ($scope) {
    $scope.name = "test";
    $scope.sayHello = function () {
      return "Hello World";
    };
    $scope.nameLength = function () {
      return $scope.name.length;
    };
  })
})();
