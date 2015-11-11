'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $futureStateProvider, lazyLoadProvider) {

  console.log(lazyLoadProvider);

  $stateProvider

    .state('index', {
    url: '/',
    controller: 'AppCtrl',
    templateUrl: 'app/app.tpl.html'

  });

  $futureStateProvider.stateFactory('ocLazyLoad', lazyLoadProvider.load);

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
