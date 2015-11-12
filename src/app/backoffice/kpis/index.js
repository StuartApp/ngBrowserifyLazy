
module.exports = angular.module('Kpis', ['templates-backoffice-kpis'])
  .controller('KpisCtrl', require('./index-ctrl'))
  .config(require('./routes'));
