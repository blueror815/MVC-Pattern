'use strict';

require('rootpath')();

var express = require('express');
var custom = require('server/app/controllers/custom.controller');
var router = express.Router();


router.post('/login', custom.login);
router.post('/signup', custom.signup);

module.exports = router;