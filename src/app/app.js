'use strict';

// require('vendor/.../angular-local-storage.min.js');

angular.module('StuartBackOffice', [
    'ui.router',
    'ct.ui.router.extras',
    'oc.lazyLoad',
    'templates-app'
    // 'LocalStorageModule'
  ])
  .provider('LazyLoad', require('./common/lazyload/lazyload'))
  .controller('AppCtrl', require('./app-ctrl'))
  .config(require('./routes'));
