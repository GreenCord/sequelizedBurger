// Sequelized burger exports
module.exports = function(sequelize, DataTypes){
	var Burger = sequelize.define("Burger", {
		burger_name: 
		{
			type: DataTypes.STRING,
			allowNull: false
		},
		devoured: 
		{
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
	return Burger;
};

// // Require
//  var orm = require('../config/orm.js');

// // Model
//  var burger = {
//  		all: function(callback) {
//  			orm.selectAll( function(res){
//  				callback(res);
//  			});
//  		},
//  		insert: function(vals, callback) {
//  			orm.insertOne(vals, function(res){
//  				callback(res);
//  			});
//  		},
//  		update: function(vals, callback) {
//  			orm.updateOne(vals, function(res){
//  				callback(res);
//  			});
//  		}
//  };

// //Export
// module.exports = burger;
