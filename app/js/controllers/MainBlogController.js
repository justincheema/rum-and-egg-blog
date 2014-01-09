'use strict'

app.controller("MainBlogController", ["$scope", function($scope){
		$scope.addPostButtonLabel = 'Add New Post';
}])
.run(function($rootScope) {
	$rootScope.postList = [
			{
				id: 0,
				author: "Rodney Og",
				time: moment().format("YYYY-MM-DD HH:mm"),
				subject: "Test Data",
				content: "This is test data for the content text area. Blah blah blah."
			}
		];
});