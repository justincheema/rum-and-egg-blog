'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('RumAndEggBlogApp', function() {

  beforeEach(function() {
    browser().navigateTo('app/index.html');
  });

  it('should redirect to app/index.html/blog', function() {
    expect(browser().location().url()).toBe("app/index.html/blog");
  });

  it('should render the Add New Post view when the Add New Post button is clicked', function() {
    element('#listUsers').click();
    expect(browser().location().url()).toBe("index.html/viewUsers");
  });


  /*describe('view1', function() {

    beforeEach(function() {
      browser().navigateTo('#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser().navigateTo('#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 2/);
    });

  });*/
});
