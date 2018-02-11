// Requires
var connection = require('../config/connection.js');

// ORM
var orm = {

	selectAll: function(callback){
		console.log('Selecting All');
		var query = 'SELECT * FROM burgers ORDER BY id DESC;';
		connection.query(query,(err,result)=>{
			if (err) throw err;
			callback(result);
		});
	},
	insertOne: function(vals, callback){
		console.log('Inserting One',vals);
		var query = 'INSERT INTO burgers (burger_name) VALUES (?)';
		connection.query(query,vals,(err,result)=>{
			if (err) throw err;
			callback(result);
		});
	},
	updateOne: function(vals, callback){
		console.log('Updating One',vals);
		var query = 'UPDATE burgers SET devoured = 1 WHERE id = ?';
		connection.query(query,vals,(err,result)=>{
			if (err) throw err;
			callback(result);
		});
	}

};

// Export
module.exports = orm;