var app = require('./app_config.js');

var cleanningOrdersController = require('./controller/cleanningOrdersController.js');

var validator = require('validator');

app.get('/', function (req, res) {

	res.end('ON!');
});


app.get('/cleanningorders', function(req, res) {

	cleanningOrdersController.list(function(resp) {

		res.json(resp);
	});
});


app.get('/cleanningorders/:id', function(req, res) {

	var id = validator.trim(validator.escape(req.param('id')));

	cleanningOrdersController.order(id, function(resp) {

		res.json(resp);
	});
});


app.post('/cleanningorders', function(req, res) {
	
	var description = validator.trim(validator.escape(req.body.description));
	var value = req.body.value;
	var address = validator.trim(validator.escape(req.body.address));

	cleanningOrdersController.save(description, value, address, function(resp){

		res.json(resp);
	});
});

app.put('/cleanningorders/:id', function(req, res) {

	var id = validator.trim(validator.escape(req.param('id')));
	var description = validator.trim(validator.escape(req.body.description));
	var value = req.body.value;
	var address = validator.trim(validator.escape(req.body.address));

	cleanningOrdersController.update(id, description, value, address, function(resp) {

		res.json(resp);
	});
});

app.delete('/cleanningorders/:id', function(req, res) {

	var id = validator.trim(validator.escape(req.param('id')));

	cleanningOrdersController.delete(id, function(resp) {

		res.json(resp);
	});
});


