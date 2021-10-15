var mysql = require('mysql');
const dbConfig = require('../config/db.config');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
});

module.exports = pool;

