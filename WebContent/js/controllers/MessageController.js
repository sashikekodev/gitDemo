/**
 * 
 */
	app.controller("MessageController", ["$scope", "messageValueService", 
	                                  "myVal", "myVal2","testService", function($scope, messageValueService, myVal, myVal2, testService)
	{
		console.log(messageValueService, myVal(), myVal2);
		
		myVal2.text ="changed";
		console.log(myVal2);
		$scope.val = false;
		$scope.hide = function()
		{
			$scope.val = !$scope.val;
		};
		

		console.log(testService.getX());
		testService.setX("Cats are cool");
		console.log(testService.getX());
		
	}])
	.value("myVal", function(){return "myVal";})
	.value("myVal2", {text: "myVal2"});
	

	app.constant("messageValueService", {msg: "This is the message value service"});
	
	
	
	app.service("testService", function()
	{
		var  x = "what?";
		
		this.getX = function()
		{
			return x;
		};
		
		this.setX = function(z)
		{
			x = z;
		};
	});