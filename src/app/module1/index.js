'use strict';
module.exports = angular.module(
        'module1', ['templates-module1']
    )
    //.controller('OneModule1Ctrl', require('./controllers/OneModule1Ctrl.js'))
    .config(
        require('./routes')
    ).name;
