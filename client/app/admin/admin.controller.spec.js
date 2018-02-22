'use strict';

describe('Component: AdminComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var AdminComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AdminComponent = $componentController('AdminComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
