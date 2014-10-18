'use strict';

//myApp.directive("mysample", function($compile){
//	return {
//		restrict: "E",
//		link: function(scope, element, attrs, controller)
//		{
//			var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
//			angular.element(element).html($compile(markup)(scope));
//		}	
//	};	
//});

/*
instead of using the link, if you are only going to use html, you can
use the template: and angular will automatically compile the for you.
*/
angular.module("GitApp").directive("mysample", function($compile){
	return {
		restrict: "E",
		template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>"
	};	
});