'use strict';

describe('Component: ForbiddenComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var ForbiddenComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ForbiddenComponent = $componentController('ForbiddenComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
