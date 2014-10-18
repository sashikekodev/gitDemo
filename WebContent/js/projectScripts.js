/**
 * 
 */

angular.module("GitApp", ["ngRoute"])
	.config(function($routeProvider)
	{
		$routeProvider
			.when("/home", 		{templateUrl: 'templates/home.html'})
			.when("/profile", 	{templateUrl: 'templates/profile.html'})
			.when("/messages", 	{templateUrl: 'templates/messages.html'})
			.when("/login", 	{templateUrl: 'templates/login.html'})
			.otherwise({redirectTo: '/home'});
	});