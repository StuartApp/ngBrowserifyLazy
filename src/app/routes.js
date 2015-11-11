'use strict';

var ocLazyLoadStateFactory = function($q, $ocLazyLoad, futureState) {
    var deferred = $q.defer();
    $ocLazyLoad.load(futureState.bundle).then(function() { // name
        deferred.resolve();
    }, function() {
        deferred.reject();
    });
    return deferred.promise;
};

/* @ngInject */
module.exports = function($stateProvider, $locationProvider, $urlRouterProvider, $futureStateProvider) {
    //$locationProvider.html5Mode(true);

    $stateProvider
        .state('index', {
            url: '/',
            controller: 'AppCtrl',
            templateUrl: 'app/app.tpl.html'
        });

    $futureStateProvider.stateFactory('ocLazyLoad', ocLazyLoadStateFactory);

    $futureStateProvider.futureState({
        // required
        type: 'ocLazyLoad', // name of futureState stateFactory to use
        urlPrefix: '/module1',
        stateName: 'module1',
        // custom attribute
        bundle: {
            name: 'module1',
            reconfig: true,
            files: [
                'app/modules/module1.js',
                'assets/module1.min.css'
            ]
        }
    });
};
