// Requirements
// var express = require('express');
// var router = express.Router();
// var path = require('path');
// var burger = require('../models/burgers.js');
var db = require('../models');

// Model

// Routes
module.exports = function(app){
	app.get('/', (req,res)=>{
		db.Burger.findAll({}).then(dbBurger=>{
			var hbsObject = {
				burgers: dbBurger
			};
			console.log(hbsObject);
			res.render('index',hbsObject)
		});
	});

	app.post('/order/new', (req,res)=>{
		console.log('post received');
		db.Burger.create({
			burger_name: req.body.burgerOrder
		}).then(dbBurger=>res.json(dbBurger));
	});

	app.put('/order/devour/:id', (req,res)=>{
		console.log('put received');
		db.Burger.update({
			devoured: true
		},{
			where: {
				id: req.params.id
			}
		}).then(dbBurger=>res.json(dbBurger)).catch(err=>res.json(err));
	});
};
// router
// 	.get('/',(req,res)=>{
// 		// res.sendFile(path.join(__dirname, "../public/test.html"));
// 		burger.all(function(data){
// 			var hbsObject = {
// 				burgers: data
// 			};
// 			console.log(hbsObject);
// 			res.render('index', hbsObject);
// 		});
// 	})
// 	.post('/order/new',(req,res)=>{
// 		var order = req.body;
// 		burger.insert(order.burgerOrder,(result)=>{
// 			res.json({ id: result.insertId });
// 		});
// 	})
// 	.put('/order/devour/:id',(req,res)=>{
// 		var id = req.params.id;
// 		burger.update(id,(result)=>{
// 			if (result.changedRows == 0) {
// 				return res.status(404).end();
// 			} else {
// 				res.status(200).end();
// 			}
// 		});
// 	});
// 	//.delete();


// // Export
// module.exports = router;