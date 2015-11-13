'use strict';

module.exports = function($stateProvider, $urlRouterProvider, $futureStateProvider, LazyLoadProvider) {

  //$urlRouterProvider.when('/backoffice', '/backoffice/kpis');

  $stateProvider.state('bck', {
    url: '/backoffice',
    controller: 'BackofficeCtrl as backoffice',
    templateUrl: 'app/backoffice/main/backoffice.tpl.html'
  });

  $futureStateProvider.stateFactory('ocLazyLoad', LazyLoadProvider.load);

  $futureStateProvider.futureState({
    type: 'ocLazyLoad',
    urlPrefix: '/backoffice',
    stateName: 'bck.kpis',
    bundle: {
      name: 'kpis',
      reconfig: true,
      files: [
        'app/modules/backoffice/kpis.js'
      ]
    }
  });

  $futureStateProvider.futureState({
    type: 'ocLazyLoad',
    urlPrefix: '/backoffice',
    stateName: 'bck.godView',
    bundle: {
      name: 'godView',
      reconfig: true,
      files: [
        'app/modules/backoffice/god-view.js'
      ]
    }
  });

};
