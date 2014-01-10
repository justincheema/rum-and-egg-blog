'use strict'

app.controller("ViewPostController", ["$scope", "$location", "$rootScope", "$routeParams", function($scope, $location, $rootScope, $routeParams) {
		$scope.isView = true;
		$scope.viewPostPageLabel = "View Post";
		$scope.authorLabel = "Author";
		$scope.subjectTextFieldLabel = "Subject";
		$scope.contentTextAreaLabel = "Content";
		$scope.updatePostButtonLabel = "Update Post";
		$scope.cancelButtonLabel = "Cancel";
		$scope.doneUpdatingPostButtonLabel = "Done";
		$scope.id = $routeParams.postId;

		$scope.post = $rootScope.postList[$routeParams.postId];

		$scope.updatePost = function() {
			$scope.isView = false;
		}

		$scope.cancelAction = function() {
			$location.path("/blog");
		}

		$scope.doneUpdatingPost = function () {
			$scope.isView = true;
		}

		$scope.cancelUpdateAction = function() {
			
		}

}]);