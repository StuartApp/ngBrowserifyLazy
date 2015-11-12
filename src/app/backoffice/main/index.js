
angular.module('Backoffice', ['templates-backoffice-main'])
  .controller('BackofficeCtrl', require('./index-ctrl'))
  .config(require('./routes'));
