'use strict';
 
describe('AddNewPostController', function(){
    var scope;
 
    beforeEach(angular.mock.module('RumAndEggBlogApp'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('AddNewPostController', {$scope: scope});
    }));

    it('should have page label text = "Add New Post"', function() {
        expect(scope.addNewPostPageLabel).toBe("Add New Post");
    });

    it('should have page label text = "Subject"', function() {
        expect(scope.subjectTextFieldLabel).toBe("Subject");
    });

    it('should have page label text = "Content"', function() {
        expect(scope.contentTextAreaLabel).toBe("Content");
    });

    it('should have page label text = "submitButtonLabel"', function() {
        expect(scope.submitButtonLabel).toBe("Submit");
    });

    it('should have 1 default post already populated', function() {
        expect(scope.postList.length).toBe(1);
    });

    it('should have 1 default post already populated', function() {
        expect(scope.postList.length).toBe(1);
    });

});