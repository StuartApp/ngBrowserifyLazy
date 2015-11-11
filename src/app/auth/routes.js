'use strict';

module.exports = function ($stateProvider) {

  $stateProvider
    .state('auth', {
      url: '/auth',
      templateUrl: 'app/auth/auth.tpl.html',
      controller: function () {
        console.log('AUTH');
      }
    });


};
