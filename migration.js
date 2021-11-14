var mysql = require('mysql');
var migration = require('mysql-migrations');
const dbConfig = require('./config/db.config');

var connection = mysql.createPool({
    connectionLimit: 10,
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
});

migration.init(connection, __dirname + '/migrations', function(){
    console.log('finished running migrations..');
})