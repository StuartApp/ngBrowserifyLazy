'use strict';

var ocLazyLoadStateFactory = function($q, $ocLazyLoad, futureState) {
  var deferred = $q.defer();

  $ocLazyLoad.load(futureState.bundle).then(function() {
    deferred.resolve();
  }, function() {
    deferred.reject();
  });
  return deferred.promise;
};

module.exports = function($stateProvider, $urlRouterProvider, $futureStateProvider) {

  $stateProvider

    .state('index', {
    url: '/',
    controller: 'AppCtrl',
    templateUrl: 'app/app.tpl.html'
  });

  $futureStateProvider.stateFactory('ocLazyLoad', ocLazyLoadStateFactory);

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
