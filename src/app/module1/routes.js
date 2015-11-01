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
                'module1', {
                    url: '/module1',
                    templateUrl: 'app/module1/index.tpl.html',
                    controller: function() {
                        console
                            .log(
                                'Module 1 AA'
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
