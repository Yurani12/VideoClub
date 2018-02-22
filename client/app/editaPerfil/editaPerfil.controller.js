'use strict';
(function(){

class EditaPerfilComponent {
  constructor(usuariosService,$stateParams,$state,ciudadesService, departamentosService, localStorageService){
		this.usuariosService = usuariosService;
		this.ciudadesService = ciudadesService;
		this.departamentosService = departamentosService;
		this.$stateParams = $stateParams;
		this.$state = $state;
		this.localStorageService = localStorageService;
	}
	$onInit(){
		this.departamentosService.query().$promise
		.then(response => {
			this.departamentos = response;
		})
		.catch(err => console.error(err));

	this.usuariosService.get({id:this.localStorageService.get('idUsuarioLogeado')}).$promise
	.then(response => {
		this.usuario = response;
		console.log(this.usuario);
	})
	.catch(err => console.error(err));
  }

	getCiudades(){
		this.ciudadesService.getCiudades({idDepartamento:this.idDepartamento}).$promise
		.then(response => {
			this.ciudades = response;
			console.log("Ciudades",this.ciudades);
		})
		.catch(err => console.error(err));
	}

	updateUser(){
		this.usuariosService.update({id:this.usuario.id},this.usuario).$promise
		.then(response => {
			console.log("Usuario actualizado")
			this.$state.go('main');
		})
		.catch(err => console.error(err));
	}
}

angular.module('videoClubApp')
  .component('editaPerfil', {
    templateUrl: 'app/editaPerfil/editaPerfil.html',
    controller: EditaPerfilComponent,
    controllerAs: 'vm'
  });

})();
