var app = angular.module('myApp', ['youtube-embed']); 

app.config(['$routeProvider',
	function($routeProvider) { 
		$routeProvider.
			when('/home', {
				templateUrl: 'thumbnail-view.html'
			}).
			when('/video', {
				templateUrl: 'video-view.html',
				controller: 'videoCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);



