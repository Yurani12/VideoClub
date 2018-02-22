'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editaPerfil', {
        url: '/editaPerfil',
        template: '<edita-perfil></edita-perfil>'
      });
  });
