'use strict'

app.controller("AddNewPostController", ["$scope", "$location", "$rootScope", function($scope, $location, $rootScope) {
		var currentDate = moment().format("YYYY-MM-DD HH:mm");

		$scope.addNewPostPageLabel = "Add New Post";
		$scope.subjectTextFieldLabel = "Subject";
		$scope.contentTextAreaLabel = "Content";
		$scope.submitButtonLabel = "Submit";

		$scope.addNewPost = function() {
			$rootScope.postList.push({
				id: 1,
				author: "Me for now",
				time: moment().format("YYYY-MM-DD HH:mm"),
				subject: $scope.PostSubject,
				content: $scope.PostContent
			});
			$location.path("/blog");
		}
}]);