'use strict'

describe('RumAndEggBlogApp', function(){

    it('should map the routes to the proper template and controller where applicable', function() {
    	angular.mock.module('RumAndEggBlogApp');

    	inject (function($route) {
	    	expect($route.routes['/blog'].templateUrl).toBe('partials/blog.html');
	    	expect($route.routes['/blog'].controller).toBe('MainBlogController');

	    	expect($route.routes['/addNewPost'].templateUrl).toBe('partials/addNewPost.html');
	    	expect($route.routes['/addNewPost'].controller).toBe('AddNewPostController');

	    	expect($route.routes['/viewPost/:postId'].templateUrl).toBe('partials/viewPost.html');
	    	expect($route.routes['/viewPost/:postId'].controller).toBe('ViewPostController');

	    	expect($route.routes['/viewUsers'].templateUrl).toBe('partials/viewUsers.html');
	    	expect($route.routes['/viewUsers'].controller).toBe('ViewUsersController');

	    	expect($route.routes['/addNewUser'].templateUrl).toBe('partials/addNewUser.html');
	    	expect($route.routes['/addNewUser'].controller).toBe('AddNewUserController');

	    	expect($route.routes[null].redirectTo).toEqual('/blog')
    })
    });

});
