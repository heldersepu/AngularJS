(function () {
  'use strict';

  angular.module('test1', [])
  .controller('ControllerOne', function ($scope) {
    $scope.message = "";
    $scope.btnClick = function () {

      $scope.message = "Please enter data first";
      if (!isEmpty($scope.input))
      {
        $scope.message = "Enjoy!";
        if ($scope.input.split(",").length > 3)
          $scope.message = "Too much!";
      }
    };

  })
})();

function isEmpty(val)
{
  return angular.isUndefined(val) || val === null || val == "";
}
