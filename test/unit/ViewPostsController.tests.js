'use strict';
 
describe('ViewPostController', function(){
    var scope;
 
    beforeEach(angular.mock.module('RumAndEggBlogApp'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('ViewPostController', {$scope: scope});
    }));

    it('should have an isView varaible = true', function() {
        expect(scope.isView).toBe(true);
    });

    it('should have page title text = "View Post"', function() {
        expect(scope.viewPostPageLabel).toBe("View Post");
    });

	it('should have text field text = "Author"', function() {
        expect(scope.authorLabel).toBe("Author");
    });

    it('should have text field text = "Subject"', function() {
        expect(scope.subjectTextFieldLabel).toBe("Subject");
    });
   		
   	it('should have text field text = "Content"', function() {
        expect(scope.contentTextAreaLabel).toBe("Content");
    });

    it('should have button label text = "Update Post"', function() {
        expect(scope.updatePostButtonLabel).toBe("Update Post");
    });

    it('should have button label text = "Cancel"', function() {
        expect(scope.cancelButtonLabel).toBe("Cancel");
    });

	it('should have button label text = "Done"', function() {
        expect(scope.doneUpdatingPostButtonLabel).toBe("Done");
    });    
});