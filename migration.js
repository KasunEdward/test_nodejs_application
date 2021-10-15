var mysql = require('mysql');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Kasun@123',
    database: 'test_nodejs_db'
});

migration.init(connection, __dirname + '/migrations', function(){
    console.log('finished running migrations..');
})