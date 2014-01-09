'use strict'

// Declare app level module 
var app = angular.module('RumAndEggBlogApp', ['ngRoute']);

app.config(['$routeProvider', 
	function($routeProvider) {
		
		$routeProvider.
		when('/blog', 
		{
			templateUrl: 'partials/blog.html',
			controller: 'MainBlogController'
		}).
		when('/addNewPost', 
		{
			templateUrl: 'partials/addNewPost.html',
			controller: 'AddNewPostController'
		}).
		otherwise(
		{
			redirectTo: '/blog'
		});
}]);