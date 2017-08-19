'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
    this.showValidaDocumento = false;
  }

  createUser(){
  	this.usuariosService.save(this.usuario).$promise
  	.then(response => {
  		console.log("Usuario registrado correctamente ",response);
  	})
  	.catch(err=>{
  		console.log("Error al crear el usuario ",err);
  	})
  }
  validarNumDocumento(){
    console.log("NumDocumento", this.usuario.numDocumento);
    this.usuariosService.query({numDocumento:this.usuario.numDocumento}).$promise
    .then(response => {
      console.log("Valida", response);
      this.showValidaDocumento = true;
    })
    .catch(err => {
      console.log("error". err);
    })
  }
  validarEmail(){
    console.log("Email",this.usuario.email);
    this.usuariosService.query({email:this.usuario.email}).$promise
    .then(response => {
      console.log("Valida", response);
      this.showValidaEmail = true;
    })
    .catch(err =>{
      console.log("error", err);
    })
  }
}
UsuariosCreateComponent.$inject = ['usuariosService'];
angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
