'use strict';
module.exports = angular.module('module1', ['templates-module1'])
    .config(require('./routes'))
    .name;
