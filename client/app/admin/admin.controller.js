'use strict';
(function(){

class AdminComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('videoClubApp')
  .component('admin', {
    templateUrl: 'app/admin/admin.html',
    controller: AdminComponent
  });

})();
