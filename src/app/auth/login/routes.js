'use strict';

module.exports = function($stateProvider) {

  $stateProvider

    .state('login', {
    url: '/login',
    abstract: true,
    controller: 'LoginCtrl',
    templateUrl: 'app/auth/login/tpl/login.tpl.html'
  });

};
