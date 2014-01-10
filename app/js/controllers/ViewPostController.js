'use strict'

app.controller("ViewPostController", ["$scope", "$location", "$rootScope", "$routeParams", "ngTableParams", function($scope, $location, $rootScope, $routeParams, ngTableParams) {
		$scope.view = "viewPost";
		$scope.viewPostPageLabel = "View Post";
		$scope.authorLabel = "Author";
		$scope.subjectTextFieldLabel = "Subject";
		$scope.contentTextAreaLabel = "Content";
		$scope.updatePostButtonLabel = "Update Post";
		$scope.addCommentButtonLabel = "Add Comment";
		$scope.editButtonLabel = "Edit";
		$scope.cancelButtonLabel = "Cancel";
		$scope.deleteButtonLabel = "Delete";
		$scope.doneUpdatingPostButtonLabel = "Done";
		$scope.doneAddingCommentButtonLabel = "Add";
		$scope.commentTextAreaLabel = "Comment";
		$scope.commentsLabel = "Comments";
		$scope.id = $routeParams.postId;

		var post = $rootScope.postList[$routeParams.postId];
		$scope.post = post;

		$scope.commentTableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            id: 'asc'     // initial sorting
        }});

		$scope.updatePost = function() {
			$scope.view = "updatePost";
		}

		$scope.cancelAction = function() {
			$location.path("/blog");
		}

		$scope.doneUpdatingPost = function () {
			$scope.view = "viewPost";
		}

		$scope.cancelUpdateAction = function() {
			
		}

		$scope.addComment = function() {
			$scope.view = "addComment";
		}

		$scope.doneAddingComment = function() {
			$scope.view = "viewPost";
				
			$scope.post.comments.push({
				commentId: $scope.post.comments.length,
				commentAuthor: "New Author",
				commentDate: moment().format("YYYY-MM-DD HH:mm"),
				text: $scope.post.comments.comment
			});
		}

		$scope.cancelAddComment = function() {
			$scope.view = "viewPost";
		}		

		$scope.deleteComment = function(id) {
			for(var i=0; i<$scope.post.comments.length; i++) {
        		if($scope.post.comments[i].commentId == id) {
            	$scope.post.comments.splice(i, 1);
            	break;
        		}
    		}
		}

		$scope.editComment = function(id) {
			$scope.view = "editComment";
			$scope.editCommentId = id;
			$scope.post.comments.comment = $scope.post.comments[id].text
		}

		$scope.doneEditingComment = function(id) {
			$scope.post.comments[id].text = $scope.post.comments.comment;
			$scope.post.comments[id].commentDate = moment().format("YYYY-MM-DD HH:mm");
			$scope.view = "viewPost";
		}

		$scope.cancelEditComment = function() {
			$scope.view = "viewPost";
		}
}]);