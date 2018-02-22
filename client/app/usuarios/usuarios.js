'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-list', {
        url: '/usuarios-list',
        parent:'admin',
        template: '<usuarios-list></usuarios-list>'
      })
      .state('usuarios-create', {
        url: '/usuarios-create',
        authenticate: ['ADMIN', 'VENDEDOR'], /*Seguridad por rol en la url*/
        parent:'admin',
        template: '<usuarios-create></usuarios-create>'
      })
      .state('usuarios-update', {
        url: '/usuarios-update',
        parent:'admin',
        template: '<usuarios-update></usuarios-update>'
      });
  });
