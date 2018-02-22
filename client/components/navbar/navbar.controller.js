'use strict';

class NavbarController {
  //start-non-standard
  constructor(AuthService){
    this.AuthService = AuthService;
  }
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard


}

angular.module('videoClubApp')
  .controller('NavbarController', NavbarController);
