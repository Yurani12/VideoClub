'use strict';

(function(){

class TiendaComponent {
  constructor(productosService) {
    this.carrito = [];
  	this.productosService = productosService;


  }

  $onInit(){
    this.productosService.query().$promise
    .then(response => {
      console.log('productos OK', response);
      this.productos = response;
    })
    .catch(err => {
      console.log('error', err);
    });

    }/*

    agregarProducto(item){

      console.log('cam' item);
    this.carrito.push(item);

  }*/
/*  $onInit(){
  	this.productos = [
  	{
  		id: 1,
  		titulo: 'SAMSUNG P9',
  		marca: 'SAMSUNG',
  		imagen: '../assets/images/01.jpg',
  		valor: 1500000,
  		descuento: 3
  	},{
  		id: 2,
  		titulo: 'IPHONE C95',
  		marca: 'IPHONE',
  		imagen: '../assets/images/02.jpg',
  		valor: 2500000,
  		descuento: 5
  	},{
  		id: 3,
  		titulo: 'FORRO',
  		marca: 'ESTUCHE MOÑO',
  		imagen: '../assets/images/03.jpg',
  		valor: 3500000,
  		descuento: 5
  	},{
  		id: 4,
  		titulo: 'SAMSUNG EPA',
  		marca: 'FORRO CARTERA',
  		imagen: '../assets/images/04.jpg',
  		valor: 2000000,
  		descuento: 4
  	},{

  		id: 5,
  		titulo: 'PORTATIL',
  		marca: 'PORTATIL HD',
  		imagen: '../assets/images/05.jpg',
  		valor: 2000000,
  		descuento: 4
  	},{
  		id: 6,
  		titulo: 'PORTATIL',
  		marca: 'PORTATIL CULL',
  		imagen: '../assets/images/06.jpg',
  		valor: 2500000,
  		descuento: 4
  	}];

  	this.carrito = [];
  }
  agregarProducto(item){
  	this.carrito.push(item);

  }
  sumar(){

  }*/

}

angular.module('videoClubApp')
  .component('tienda', {
    templateUrl: 'app/tienda/tienda.html',
    controller: TiendaComponent,
    controllerAs: 'vm'
  });

})();
