'use strict';
(function(){

class JuegoComponent {
  constructor() {
    this.letras = [];
    this.palabra = 'desarrollo';
    this.intentos = 10;
    this.letraJugador = "";
  }

  $onInit(){
    for (let i = 0; i < this.palabra.length; i++) {
      this.letras.push("_");
    }
  }

  verificar(){
    this.posicion = this.palabra.indexOf(this.letraJugador.key);
    console.log(this.posicion, this.letraJugador);
    if (this.posicion === -1) {
      console.log('FALLASTE');
      this.intentos -= 1;
    } else{
      this.reemplazar();
      console.log('ACERTASTE');
    }

    this.letraJugador.key = '';
  }

  reemplazar(){
    for (let i = 0; i < this.letras.length; i++) {
      if (this.letras[this.posicion] == "_") {
        this.letras[this.posicion] = this.letraJugador.key;
      } else{
        this.posicion = this.palabra.indexOf(this.letraJugador.key,this.posicion + 1);
      }
    }
  }
}

angular.module('videoClubApp')
  .component('juego', {
    templateUrl: 'app/juego/juego.html',
    controller: JuegoComponent,
    controllerAs: 'vm'
  });

})();
