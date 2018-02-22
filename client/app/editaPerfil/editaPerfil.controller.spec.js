'use strict';

describe('Component: EditaPerfilComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var EditaPerfilComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EditaPerfilComponent = $componentController('EditaPerfilComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
