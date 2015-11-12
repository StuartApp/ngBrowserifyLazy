module.exports = angular.module('AuthModule', [
    'templates-auth'
  ])
  .controller('AuthCtrl', require('./index-ctrl'))
  .config(require('./routes.js'))
  .name;
