
var myUtil = require('./commons/myutility');
var http = require('http');
var util = require('util');

console.log('****** User defined Modules *******');

console.log('Get date: ', myUtil.getDate());
console.log('DB Url: ', myUtil.getDatabaseUrl());
console.log('Get full name: ',myUtil.getFullName('Kennedy', 'John'));
