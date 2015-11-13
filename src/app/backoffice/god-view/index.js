
module.exports = angular.module('GodView', ['templates-backoffice-god-view'])
  .controller('GodViewCtrl', require('./index-ctrl'))
  .config(require('./routes'));
