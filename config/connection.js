// Require MySQL to connect to db
var mysql = require('mysql');
require('dotenv').config();

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: process.env.MYSQLPW,
		database: 'burgers_db'
	});
}

// Connect to the db
connection.connect((err)=>{
	if (err) throw err;
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;