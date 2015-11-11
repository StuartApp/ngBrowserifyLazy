'use strict';

angular.module('StuartBackOffice', [
    'ui.router',
    'ct.ui.router.extras',
    'oc.lazyLoad',
    'templates-app'
  ])
  .provider('lazyLoad', require('./common/lazyload/lazyload'))
  .controller('AppCtrl', require('./app-ctrl'))
  .config(require('./routes'));
