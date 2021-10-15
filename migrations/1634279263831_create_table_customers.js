module.exports = {
    "up": `CREATE TABLE customers (
        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        email varchar(255) NOT NULL,
        name varchar(255) NOT NULL,
        active BOOLEAN DEFAULT false   
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8`,
    "down": "DROP TABLE customers"
}