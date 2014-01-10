'use strict'

app.controller("ViewUsersController", ["$scope", "$location", function($scope, $location) {
	$scope.addUserButtonLabel = "Add User";
	$scope.cancelButtonLabel = "Back to blog list";

	$scope.cancelAction = function() {
		$location.path("/blog");
	}
}]);	