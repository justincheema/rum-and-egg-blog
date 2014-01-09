'use strict'

app.controller("AddNewPostController", ["$scope", "$location", "$rootScope", function($scope, $location, $rootScope) {
		var currentDate = moment().format("YYYY-MM-DD HH:mm");

		$scope.addNewPostPageLabel = "Add New Post";
		$scope.subjectTextFieldLabel = "Subject";
		$scope.contentTextAreaLabel = "Content";
		$scope.submitButtonLabel = "Submit";
		$scope.cancelButtonLabel = "Cancel";

		$scope.addNewPost = function() {
			$rootScope.postList.push({
				id: $rootScope.postList.length,
				author: "Me for now",
				date: moment().format("YYYY-MM-DD HH:mm"),
				subject: $scope.PostSubject,
				content: $scope.PostContent
			});
			$location.path("/blog");
		}

		$scope.cancelAction = function() {
			$location.path("/blog");
		}
}]);