'use strict';

/**
 * Define login module and dependecies
 */
angular.module('LoginModule', [
    'templates-login'
  ])
  .config(require('./routes'))
  .controller('LoginCtrl', require('./controllers/loginCtrl'));
