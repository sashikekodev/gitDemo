/**
 * 
 */
angular.module("GitApp")
	.controller("MessageController", ["$scope", function($scope)
	{
		$scope.val = false;
		$scope.hide = function()
		{
			$scope.val = !$scope.val;
		};
	}]);