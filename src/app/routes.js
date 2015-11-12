'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $futureStateProvider, LazyLoadProvider) { // localStorageServiceProvider

  //localStorageServiceProvider
  //  .setPrefix('stuart.backoffice');
  var isLoogged = true;

  $urlRouterProvider.when('/', !isLoogged ? '/auth/login': '/backoffice');

  $stateProvider.state('app', {
    url: '/',
    controller: 'AppCtrl as app',
    templateUrl: 'app/app.tpl.html'
  });

  $futureStateProvider.stateFactory('ocLazyLoad', LazyLoadProvider.load);

  $futureStateProvider.futureState({
    type: 'ocLazyLoad',
    urlPrefix: '/auth',
    stateName: 'auth',
    bundle: {
      name: 'auth',
      reconfig: true,
      files: [
        'app/modules/auth.js'
      ]
    }
  });

  $futureStateProvider.futureState({
    type: 'ocLazyLoad',
    urlPrefix: '/backoffice',
    stateName: 'bck',
    bundle: {
      name: 'bck',
      reconfig: true,
      files: [
        'app/modules/backoffice/main.js'
      ]
    }
  });

};
