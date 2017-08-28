var db = require('../db_config.js');

exports.list = function(callback) {

	db.CleanningOrder.find({}, function(error, orders) {

		if(error){
			callback({error: 'Não foi possível retornar as ordens de serviço'});
		} else {
			callback(orders);
		}
	});
}

exports.order = function(id, callback) {

	db.CleanningOrder.findById(id, function(error, order) {

		if(error){
			callback({error: 'Não foi possível retornar a ordem de serviço'});
		} else {
			callback(order);
		}
	});
}

exports.save = function(description, value, address, callback) {

	new db.CleanningOrder({
		'description': description,
		'value': value,
		'address': address,
		created_at: new Date()
	}).save(function(error, order) {

		if(error){
			callback({error: 'Não foi possível salvar a ordem de serviço'});
		} else {
			callback(order);
		}
	});
}

exports.update = function(id, description, value, address, callback) {

	db.CleanningOrder.findById(id, function(error, order){

		if(description){
			order.description = description;
		}

		if(value){
			order.value = value;
		}

		if(address){
			order.address = address;
		}

		order.save(function(error, order) {

			if(error){
				callback({error: 'Não foi possível editar a ordem de serviço'});
			} else {
				callback(order);
			}
		});
	});
}

exports.delete = function(id, callback) {

	db.CleanningOrder.findById(id, function(error, order) {

		if(error){
			callback({error: 'Não foi possível remover a ordem de serviço'});
		} else {

			order.remove(function(error) {
				if(!error){
					callback({response: 'Ordem de serviço removida com sucesso'});
				}
			});
		}
	});
}

