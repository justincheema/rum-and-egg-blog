'use strict'

app.controller("AddNewUserController", ["$scope", "$location", "$rootScope", function($scope, $location, $rootScope) {
	$scope.addNewUserPageLabel = "Add A New User";
	$scope.nameFieldLabel = "Name";
	$scope.passwordFieldLabel = "Password";
	$scope.roleFieldLabel = "Role";
	$scope.submitButtonLabel = "Submit";
	$scope.cancelButtonLabel = "Cancel";

	$scope.addNewUser = function() {
		$rootScope.userList.push({
			id: $rootScope.userList.length,
			name: $scope.username,
			password: $scope.userpassword,
			role: $scope.userrole,
			dateCreated: moment().format("YYYY-MM-DD HH:mm")
		});
		$location.path("/viewUsers");
	}

	$scope.cancelAction = function() {
		$location.path("/viewUsers");
	}
}]);