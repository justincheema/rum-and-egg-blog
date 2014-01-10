'use strict';
 
describe('MainBlogController', function(){
    var scope;
 
    beforeEach(angular.mock.module('RumAndEggBlogApp'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('MainBlogController', {$scope: scope});
    }));

    it('should have title page text = "Justin\'s Rum and Egg Blog!"', function() {
        expect(scope.blogTitle).toBe("Justin's Rum and Egg Blog!");
    });

    it('should have button label text = "Add New Post"', function() {
        expect(scope.addPostButtonLabel).toBe("Add New Post");
    });

    it('should have edit message text = "Click on any post below to view it."', function() {
        expect(scope.editPostMessage).toBe("Click on any post below to view it.");
    });

    it('should have label text = "Current posts"', function() {
        expect(scope.currentPostsHeader).toBe("Current posts");
    });

    it('should have 1 default post already populated', function() {
        expect(scope.postList.length).toBe(1);
    });

});