'use strict';

class NavbarController {
  //start-non-standard
  constructor(AuthService){
    this.AuthService = AuthService;
  }
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'Usuarios',
    'state': 'usuarios-list'
  },{
    'title': 'Crear Usuario',
    'state': 'usuarios-create'
  },{
    'title': 'Login',
    'state': 'login'
  }];

  isCollapsed = true;
  //end-non-standard


}

angular.module('videoClubApp')
  .controller('NavbarController', NavbarController);
