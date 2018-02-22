'use strict';

(function(){

class UsuariosListComponent {
  constructor(usuariosService, NavegateParams, $state) {
    this.usuariosService = usuariosService;
    this.NavegateParams = NavegateParams;
    this.$state = $state;

    this.query = {
      limit: 4,
      page: 1
    };
  }

  $onInit(){
  	this.usuariosService.query().$promise
  	.then(response => {
  		console.log("USUARIOS OK",response);
      this.usuarios = response;
  	})
  	.catch(err => {
  		console.log("ERROR",err);
  	});


  }
  goUpadateUser(idUser){
    this.NavegateParams.setData('idUsuario',idUser)
    this.$state.go("usuarios-update")
  }
}

UsuariosListComponent.$inject = ['usuariosService', 'NavegateParams', '$state'];
angular.module('videoClubApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs: 'vm'
  });

})();
