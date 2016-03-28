//create angular module
	//added ngRoute for all routing purposes
var myPort = angular.module('myPort', ['ngRoute']);


// configure routes
myPort.config(function($routeProvider, $locationProvider) {
	$routeProvider

	//route for home page, this is controlled by the main controller
	.when('/', {
		templateUrl : '/pages/home.html',
		controller : 'mainController'
	})

	.when('/home', {
		templateUrl : '/pages/home.html',
		controller : 'mainController'
	})

	//route for about page, this has its own controller
	.when('/about', {
		templateUrl : '/pages/about.html',
		controller : 'aboutController'
	})

	//route for contact page, this has its own controller
	.when('/contact', {
		templateUrl : '/pages/contact.html',
		controller : 'contactController'
	})
	// .otherwise({
	// 	redirectTo: '/pages/home.html'
	// })

	$locationProvider.html5Mode(true);
});

//created main controller and added the scope of the controller
myPort.controller('mainController', function($scope) {
	$scope.message = "This is the main page!!!"
});

myPort.controller('aboutController', function($scope) {
	$scope.message = "This is the about me page!!"
});

myPort.controller('contactController', function($scope) {
	$scope.message = "This is the contact me page!!"
});
