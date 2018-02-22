'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('juego', {
        url: '/juego',
        template: '<juego></juego>'
      });
  });
