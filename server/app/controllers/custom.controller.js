'use strict';

require('rootpath')();
var Custom = require('server/app/models/custom.model');
var md5 = require('md5');

exports.login = function(req, res) {
	Auth.findOne({
		email: req.body.params.username, 
		password: md5(req.body.params.password)
	}, function(err, user) {
		console.log(user);
		if (user) {
			res.status(200).json({
				type: "success",
				message: "login success",
				data: {
					user_type: user.user_type,
					username: user.email
				}
			});
		} else {
			res.status(401).json({
				type: "auth_error",
				message: "User not found"
			});
		}
	})
}

exports.signup = function(req, res) {

}