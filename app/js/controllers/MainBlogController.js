'use strict'

app.controller("MainBlogController", ["$scope", "ngTableParams", function($scope, ngTableParams) {
		$scope.blogTitle = "Justin's Rum and Egg Blog!";
		$scope.addPostButtonLabel = "Add New Post";
		$scope.currentPostsHeader = "Current posts";

		$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            id: 'asc'     // initial sorting
        }});
}])
.run(function($rootScope) {
	$rootScope.postList = [
			{
				id: 0,
				author: "Rodney Og",
				date: moment().format("YYYY-MM-DD HH:mm"),
				subject: "Test Data",
				content: "This is test data for the content text area. Blah blah blah."
			}
		];
});