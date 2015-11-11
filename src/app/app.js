'use strict';

angular.module('StuartBackOffice', [
    'ui.router',
    'ct.ui.router.extras',
    'oc.lazyLoad',
    'templates-app'
  ])
  .provider('lazyLoad', require('./common/providers/lazyLoad'))
  .controller('AppCtrl', require('./appCtrl'))
  .config(require('./routes'));
