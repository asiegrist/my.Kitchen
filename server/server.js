'use strict';

var config = require('./config');
var app = require('app');

app(config.app).listen(process.env.NODE_PORT);
console.log('Listening on port ' +
  process.env.NODE_PORT + ' - ' +
  process.env.NODE_ENV + ' mode');
