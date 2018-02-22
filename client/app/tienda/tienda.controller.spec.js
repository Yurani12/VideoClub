'use strict';

describe('Component: TiendaComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var TiendaComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TiendaComponent = $componentController('tienda', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
