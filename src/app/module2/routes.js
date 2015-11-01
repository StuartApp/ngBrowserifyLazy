'use strict';
/* @ngInject */
module
    .exports =
    function(
        $stateProvider
    ) {
        $stateProvider
            .
        state
            (
                'module2', {
                    url: '/module2',
                    templateUrl: 'app/module2/index.tpl.html',
                    controller: function() {
                        console
                            .log(
                                'Module 2'
                            );
                    }
                }
            );
        //.state('apples.delicious', {
        //  url: '/delicious',
        //  templateUrl: 'scripts/apples/views/red-delicious.html',
        //  controller: 'RedDeliciousCtrl as ctrl'
        //})
        //.state('apples.granny', {
        //  url: '/granny-smith',
        //  templateUrl: 'scripts/apples/views/granny-smith.html',
        //  controller: 'GrannySmithCtrl as ctrl'
        //});
    };
