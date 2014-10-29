/**
 * 
 */

app.controller("profile1Controller", ["$scope","msgService", function($scope, msgService)
{
	$scope.sendMessage = function()
	{
		console.log($scope.message);
		msgService.send($scope.message);
	};

}]);

app.controller("profile2Controller", ["$scope","msgService", function($scope, msgService)
{
	$scope.mcount = msgService.getCount();
	
	$scope.$on("broadcastmsg", function(ev, msg)
	{
		$scope.message = "Two: " + msg;
	});
	
	$scope.$on("goingup", function(ev, data)
	{
		$scope.message = data;
	});
}]);


app.controller("profile3Controller", ["$scope","msgService",  function($scope, msgService)
{
	$scope.mcount = msgService.getCount();
  	$scope.$on("broadcastmsg", function(ev, msg)
  	{
  		$scope.message = "Three: " + msg;
  	});
  	
  	$scope.sendUp = function()
  	{
  		$scope.$parent.$broadcast("goingup", "From Three");
  	};
}]);

app.factory("msgService", function($rootScope)
{
	var service = {};
	var count = 0;
	
	service.send = function(msg)
	{
		count++;
		$rootScope.$broadcast("broadcastmsg", msg);
	};
	
	
	service.getCount = function()
	{
		return count;
	};
	
	
	return service;
});