var express = require('express');

var app = module.exports = express();

var bodyParser = require('body-parser');

var rateLimit = require('express-rate-limit');

var helmet = require('helmet');

var allowCors = function(req, res, next) {

	res.header('Access-Control-Allow-Origin', '127.0.0.1:5000'); // set referal
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');

	next();
};

var limiter = new rateLimit({
	windowMs: 15*60*1000,
	max: 100,
	delayMs: 0
});

app.listen(5000);

app.use(allowCors);

app.use(bodyParser.json());

app.use(limiter);

app.use(helmet({
	frameguard: {action: 'deny'}
}));

app.use(bodyParser.urlencoded({

	extended: false
}));