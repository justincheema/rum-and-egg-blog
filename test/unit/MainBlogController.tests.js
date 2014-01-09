'use strict';
 
describe('MainBlogController', function(){
    var scope;
 
    beforeEach(angular.mock.module('RumAndEggBlogApp'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('MainBlogController', {$scope: scope});
    }));
    it('should have variable text = "This is the main blog screen"', function() {
        expect(scope.message).toBe("This is the main blog screen");
    });
});