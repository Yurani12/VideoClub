'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(usuariosService, ciudadesService, tiposDocumentosService) {
    this.usuariosService = usuariosService;
    this.showValidaDocumento = false;
    this.showValidaEmail = false;
    this.ciudadesService = ciudadesService;
    this.tiposDocumentosService = tiposDocumentosService;
    this.usuario = {
      numDocumento : null,
      ciudad:{
        id: null
      }
    }
  }
  $onInit(){
  this.tiposDocumentosService.query().$promise
  .then(response => {
    console.log('tipos documentos ok', response);
    this.descripcion = response;
  })
  .catch(err => {
    console.log('ERROR', err);
  });
}


getTipo(){
  this.tiposDocumentosService.get({id:this.usuarios.idTipoDocumento.id}).$promise
  .then(response => {
    console.log('OK', response);
    this.descripcion = response;
  })
  .catch(err => {
    console.log('error', err);
  })
}

  createUser(){
    console.log("Usuari", this.usuario);
  	this.usuariosService.save(this.usuario).$promise
  	.then(response => {
  		console.log("Usuario registrado correctamente ",response);
  	})
  	.catch(err=>{
  		console.log("Error al crear el usuario ",err);
  	})
  }

querySearch(searchText){
  return this.ciudadesService.getCiudades({nombre: searchText}).$promise
  .then(response => {
    console.log("REST", response);
    return response;
  })
  .catch(err => console.log(err));
}

selectedItemChange(item){
  console.log("TIEM", item);
  if (item.id != undefined) {
    this.usuario.ciudad.id = item.id;
  }
}

  validarNumDocumento(){
    this.usuariosService.query({numDocumento:this.usuario.numDocumento}).$promise
    .then(response => {
      console.log("Valida", response);
      if (this.usuario.numDocumento == undefined || response.length <=0) {
        this.showValidaDocumento = true;
      }
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
UsuariosCreateComponent.$inject = ['usuariosService', 'ciudadesService', 'tiposDocumentosService'];
angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
