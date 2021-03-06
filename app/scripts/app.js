'use strict';

/**
 * @ngdoc overview
 * @name torneosPslApp
 * @description
 * # torneosPslApp
 *
 * Main module of the application.
 */
angular
  .module('torneosPslApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/participantes',{
        templateUrl: 'views/participantes.html',
        controller: 'ParticipantesController'
      })
      .when('/torneos',{
        templateUrl: 'views/torneos.html',
        controller: 'TorneosController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
