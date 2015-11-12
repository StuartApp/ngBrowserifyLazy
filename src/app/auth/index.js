module.exports = angular.module('AuthModule', [
    'templates-auth'
  ])
  .controller('AuthCtrl', require('./index-ctrl'))
  .controller('LoginCtrl', require('./controllers/login-ctrl'))
  .controller('SignUpCtrl', require('./controllers/sign-up-ctrl'))
  .controller('RecoveryCtrl', require('./controllers/recovery-ctrl'))
  .config(require('./routes.js'))
  .name;
