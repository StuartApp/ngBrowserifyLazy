'use strict';

module.exports = function($stateProvider) {

  $stateProvider.state('backoffice', {
    url: '/backoffice',
    controller: 'BackofficeCtrl as backoffice',
    templateUrl: 'app/backoffice/main/backoffice.tpl.html'
  });

};
