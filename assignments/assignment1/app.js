(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.message = "";
		$scope.msgClass = "";
		$scope.btnClick = function () {
			$scope.message = "Please enter data first";
			$scope.msgClass = "text-danger";
			if (!isEmpty($scope.input))
			{
				$scope.msgClass = "text-success";
				$scope.message = "Enjoy!";
				if ($scope.input.split(",").length > 3)
					$scope.message = "Too much!";
			}
		};
	}
})();

function isEmpty(val)
{
  return angular.isUndefined(val) || val === null || val == "";
}
