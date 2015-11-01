'use strict';
module
    .exports =
    angular
    .module(
        'module2', [
            'templates-module2'
        ]
    )
    //.controller('OneModule1Ctrl', require('./controllers/OneModule1Ctrl.js'))
    .config(
        require(
            './routes'
        )
    )
    .name;
