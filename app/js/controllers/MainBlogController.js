'use strict'

app.controller("MainBlogController", ["$scope", "ngTableParams", "$rootScope", "$location", function($scope, ngTableParams, $rootScope, $location) {
		$scope.blogTitle = "Justin's Rum and Egg Blog!";
		$scope.addPostButtonLabel = "Add New Post";
		$scope.editPostMessage = "Click on any post below to view it.";
		$scope.currentPostsHeader = "Current posts";
		$scope.editButtonLabel = "Edit";
		$scope.deleteButtonLabel = "Delete";

		$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            id: 'asc'     // initial sorting
        }});
        
        $scope.deletePost = function(id) {
			for(var i=0; i<$rootScope.postList.length; i++) {
        		if($rootScope.postList[i].id == id) {
            	$rootScope.postList.splice(i, 1);
            	break;
        		}
    		}
		}
}])
.run(function($rootScope) {
	$rootScope.postList = [
			{
				id: 0,
				author: "Rodney Og",
				date: moment().format("YYYY-MM-DD HH:mm"),
				subject: "Test Data",
				content: "This is test data for the content text area. Blah blah blah.",
				comments: [
				{
					commentId: 0,
					commentAuthor: "Justin",
					commentDate: moment().format("YYYY-MM-DD HH:mm"),
					text: "This is a comment"
				},
				{
					commentId: 1,
					commentAuthor: "Rusty",
					commentDate: moment().format("YYYY-MM-DD HH:mm"),
					text: "Your last comment was dumb."
				}]
			}
		];
});