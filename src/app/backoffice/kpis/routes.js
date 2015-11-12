'use strict';

module.exports = function($stateProvider) {


  $stateProvider.state('bck.kpis', {
    url: '/kpis',
    controller: 'KpisCtrl as kpis',
    templateUrl: 'app/backoffice/kpis/kpis.tpl.html'
  });

};
