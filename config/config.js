require('dotenv').config();
console.log('Using config.js...');
module.exports = {
  development: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPW,
    database: process.env.MYSQLDB,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPW,
    database: process.env.MYSQLDB,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    dialect: 'mysql',
    use_env_variable: process.env.JAWSDB_URL
  }
};