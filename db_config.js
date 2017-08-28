var db_string = 'mongodb://127.0.0.1/donamaid';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar ao banco'));

db.once('open', function() {

	var cleanningOrderSchema = mongoose.Schema({

		description: String,
		value: Number,
		address: String,
		created_at: Date
	});

	exports.CleanningOrder = mongoose.model('CleanningOrder', cleanningOrderSchema);
});