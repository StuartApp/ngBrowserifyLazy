'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $futureStateProvider, LazyLoadProvider) { // localStorageServiceProvider

  //localStorageServiceProvider
  //  .setPrefix('stuart.backoffice');
  var isLoogged = false;

  $urlRouterProvider.when('/', !isLoogged ? '/auth/login': '/kpis');

  $stateProvider.state('index', {
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
};
