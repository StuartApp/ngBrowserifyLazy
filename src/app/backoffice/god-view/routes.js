'use strict';

module.exports = function($stateProvider) {


  $stateProvider.state('bck.godView', {
    url: '/godView',
    controller: 'GodViewCtrl as godView',
    templateUrl: 'app/backoffice/god-view/god-view.tpl.html'
  });

};
