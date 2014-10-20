/**
 * 
 */
var app = angular.module("GitApp")
	.controller("MessageController", ["$scope", "messageValueService", "myVal", "myVal2", function($scope, messageValueService, myVal, myVal2)
	{
		console.log(messageValueService, myVal(), myVal2);
		
		myVal2.text ="changed";
		console.log(myVal2);
		$scope.val = false;
		$scope.hide = function()
		{
			$scope.val = !$scope.val;
		};
	}])
	.value("myVal", function(){return "myVal";})
	.value("myVal2", {text: "myVal2"});
	

	app.constant("messageValueService", {msg: "This is the message value service"});