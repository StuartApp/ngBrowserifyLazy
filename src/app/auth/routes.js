'use strict';

module.exports = function ($stateProvider, $urlRouterProvider, $futureStateProvider, lazyLoadProvider) {

  $stateProvider
    .state('auth', {
      url: '/auth',
      templateUrl: 'app/auth/auth.tpl.html',
      controller: function () {
        console.log('AUTH');
      }
    });

  $futureStateProvider.stateFactory('ocLazyLoad', lazyLoadProvider.load);

  $futureStateProvider.futureState({
    type: 'ocLazyLoad',
    urlPrefix: '/login',
    stateName: 'auth.login',
    bundle: {
      name: 'auth.login',
      reconfig: true,
      files: [
        'app/modules/login.js'
      ]
    }
  });

};

