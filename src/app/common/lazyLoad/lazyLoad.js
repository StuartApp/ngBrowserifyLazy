'use strict';

module.exports = function LazyLoad() {

  return {

    load: function($q, $ocLazyLoad, futureState) {
      var deferred = $q.defer();

      $ocLazyLoad.load(futureState.bundle).then(function() {
        deferred.resolve();
      }, function() {
        deferred.reject();
      });

      return deferred.promise;
    },

    $get: function() {}

  };

};
