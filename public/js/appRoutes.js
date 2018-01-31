angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/page-1', {
			templateUrl: 'views/first.html',
			controller: 'FirstController'
		})

		.when('/page-2', {
			templateUrl: 'views/second.html',
			controller: 'SecondController'
		});

	$locationProvider.html5Mode(true);

}]);
