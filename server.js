var express  = require('express');
var app = express();
var mongoose =  require('mongoose');
var bodyParser = require('body-parser');
var methodOverride  = require('method-override');


require('rootpath')();
require('dotenv').config();


var env_config = "";
switch (process.env.NODE_ENV) {
    case "development":
        env_config = require('server/config/development');
        break;
    case "staging":
        env_config = require('server/config/staging');
        break;
    case "production":
        env_config = require('server/config/production');
        break;
}

var port = process.env.PORT || 3000;

mongoose.connect(env_config.db);
console.log("---->Database connected successfully..." + env_config.db);

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/client')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('router')(app); // pass our application into our routes

// route to handle all angular requests

app.get('*', function (req, res) {
	res.sendfile('client/index.html');
});

// start app ===============================================
app.listen(port);	
console.log('Connected to node at ' + port); 			// shoutout to the user

module.exports = app; 						// expose app
