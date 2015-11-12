'use strict';

module.exports = function ($stateProvider) {

  $stateProvider
    .state('auth', {
      url: '/auth',
      templateUrl: 'app/auth/auth.tpl.html',
      controller: 'AuthCtrl as auth'
    })
    .state('auth.login', {
      url: '/login',
      templateUrl: 'app/auth/tpl/login.tpl.html',
      controller: 'LoginCtrl as login'
    })
    .state('auth.signUp', {
      url: '/sign-up',
      templateUrl: 'app/auth/tpl/sign-up.tpl.html',
      controller: 'SignUpCtrl as signUp'
    })
    .state('auth.recovery', {
      url: '/recovery',
      templateUrl: 'app/auth/tpl/recovery.tpl.html',
      controller: 'RecoveryCtrl as recovery'
    });

};
