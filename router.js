/**
 * Main application routes
 */

'use strict';

// var errors = require('./components/errors');
// var path = require('path');

require('rootpath')();


module.exports = function(app) {
  // Insert routes below 
  app.use('/custom', require('server/app/routers/custom'));
};
