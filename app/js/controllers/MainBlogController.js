'use strict'

app.controller("MainBlogController", ["$scope", "ngTableParams", "$rootScope", "$location", function($scope, ngTableParams, $rootScope, $location) {
		$scope.listUsersButton = "List users";
		$scope.blogTitle = "Justin's Rum and Egg Blog!";
		$scope.addPostButtonLabel = "Add New Post";
		$scope.editPostMessage = "Click on any post below to view it.";
		$scope.currentPostsHeader = "Current posts";
		$scope.editButtonLabel = "Edit";
		$scope.deleteButtonLabel = "Delete";
		$scope.nameLabel = "Name";
		$scope.passwordLabel = "Password";
		$scope.incorrectLogin = "";

		$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            id: 'asc'     // initial sorting
        }});
        
        $scope.deletePost = function(id) {
			for(var i=0; i<$rootScope.postList.length; i++) {
        		if($rootScope.postList[i].id === id) {
            	$rootScope.postList.splice(i, 1);
            	break;
        		}
    		}
		}

		$scope.loginUser = function(name, pass) {
			$scope.incorrectLogin = "";
			var found = false;
			for(var i=0; i<$rootScope.userList.length; i++) {
				if ($rootScope.userList[i].name === name) {
					if ($rootScope.userList[i].password === pass) {
						$rootScope.currentUser = $rootScope.userList[i];		
						found = true;
						break;
					}
				}
			}
			if (found === false) {
				$scope.incorrectLogin = "Login failure";
			}
		}
}])
.run(function($rootScope) {
	$rootScope.postList = [
			{
				id: 0,
				author: "Rodney Og",
				authorId: 3,
				date: moment().format("YYYY-MM-DD HH:mm"),
				subject: "Test Data",
				content: "This is test data for the content text area. Blah blah blah.",
				comments: [
				{
					commentId: 0,
					commentAuthor: "Justin",
					commentAuthorId: 2,
					commentDate: moment().format("YYYY-MM-DD HH:mm"),
					text: "This is a comment"
				},
				{
					commentId: 1,
					commentAuthor: "Sarah",
					commentAuthorId: 1,
					commentDate: moment().format("YYYY-MM-DD HH:mm"),
					text: "Your last comment was dumb."
				},
				{
					commentId: 2,
					commentAuthor: "Guest",
					commentAuthorId: 0,
					commentDate: moment().format("YYYY-MM-DD HH:mm"),
					text: "Guest guess"
				}]
			}
		];
	$rootScope.userList = [
			{
				id: 0,
				name: "Guest",
				password: "1234",
				role: "Reader",
				dateCreated: moment().format("YYYY-MM-DD HH:mm"),
			},
			{
				id: 1,
				name: "Sarah",
				password: "1234",
				role: "Author",
				dateCreated: moment().format("YYYY-MM-DD HH:mm"),
			},
			{
				id: 2,
				name: "Justin",
				password: "1234",
				role: "Reader",
				dateCreated: moment().format("YYYY-MM-DD HH:mm"),
			},
			{
				id: 3,
				name: "Rodney Og",
				password: "1234",
				role: "Author",
				dateCreated: moment().format("YYYY-MM-DD HH:mm"),
			}];
	$rootScope.currentUser = $rootScope.userList[0];		
});