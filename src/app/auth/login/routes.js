'use strict';

module.exports = function ($stateProvider) {

  $stateProvider

    .state('auth.login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'app/auth/login/tpl/login.tpl.html'
    });



};
