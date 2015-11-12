'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $futureStateProvider, LazyLoadProvider) {

  $stateProvider
    .state('auth', {
      url: '/auth',
      templateUrl: 'app/auth/auth.tpl.html',
      controller: 'AuthCtrl as auth'
    });

  $futureStateProvider.stateFactory('ocLazyLoad', LazyLoadProvider.load);

  $futureStateProvider.futureState({
    type: 'ocLazyLoad',
    urlPrefix: '/auth/login',
    stateName: 'auth.login',
    bundle: {
      name: 'login',
      reconfig: true,
      files: [
        'app/modules/login.js'
      ]
    }
  });
};
