'use strict'

// Declare app level module 
var app = angular.module('RumAndEggBlogApp', ['ngRoute','ngTable']);

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
		when('/viewPost/:postId', 
		{
			templateUrl: 'partials/viewPost.html',
			controller: 'ViewPostController'
		}).
		when('/viewUsers', 
		{
			templateUrl: 'partials/viewUsers.html',
			controller: 'ViewUsersController'
		}).
		when('/addNewUser', 
		{
			templateUrl: 'partials/addNewUser.html',
			controller: 'AddNewUserController'
		}).
		otherwise(
		{
			redirectTo: '/blog'
		});
}]);