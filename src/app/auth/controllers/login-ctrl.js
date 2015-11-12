'use strict';

module.exports = function LoginCtrl($scope, $location) {
  console.log('Login View');

  $scope.goToLogin = function() {
    console.log('login');
    $location.path('/backoffice');
  };

};
