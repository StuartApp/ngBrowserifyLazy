'use strict';

angular.module('Login', ['templates-login'])
  .controller('LoginCtrl', require('./index-ctrl'))
  .config(require('./routes'));
