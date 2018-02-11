var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

// Require models for syncing
var db = require('./models');

// Set static public folder
app.use(express.static('public'));

// Setup body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// View engine
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Router
// var routes = require('./controllers/burgers_controller.js');
// app.use(routes);
require('./controllers/burgers_controller.js')(app);

// app.listen(PORT, ()=>console.log('Ready to take burger orders on localhost:' + PORT));
db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log('Ready to take burger orders on port: ' + PORT);
	});
});