var db = require('../models');

// Routes
module.exports = function(app){
	app.get('/customers', (req,res)=>{
		db.Customer.findAll({}).then(dbCustomer=>res.json(dbCustomer))
	});

	app.get('/customers/:id',(req,res)=>{
		db.Customer.findOne({
			where: {
				id: req.params.id
			}
		}).then(dbCustomer=>res.json(dbCustomer));
	});

	app.post('/customers/new', (req,res)=>{
		console.log('customer post received');
		db.Customer.create({
			name: req.body.burgerCustomer
		}).then(dbCustomer=>res.json(dbCustomer));
	});

};
