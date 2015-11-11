module.exports = angular.module('AuthModule', [
    'templates-auth'
  ])
  .config(require('./routes.js'))
  .name;
