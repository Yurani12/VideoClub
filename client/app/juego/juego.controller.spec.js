'use strict';

describe('Component: JuegoComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var JuegoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    JuegoComponent = $componentController('JuegoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
