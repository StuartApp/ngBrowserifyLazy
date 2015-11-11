'use strict';

/**
 * Define login module and dependecies
 */
angular.module('LoginModule', [])
  .config(require('./routes'))
  .controller('LoginCtrl', require('./controllers/loginCtrl'));
