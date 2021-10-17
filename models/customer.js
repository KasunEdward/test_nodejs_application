const sql = require('./db.js');

// constructor
const Customer = function(customer){
    this.email = customer.email,
    this.name = customer.name,
    this.active = customer.active
}

//create new customer
Customer.create = (newCustomer, result) => {
    sql.query('INSERT INTO customers SET ?', newCustomer , (err, res) => {
        if(err){
            console.log('error:', err);
            result(err, null);
            return;
        }
        console.log('created customer:', {id: res.insertId, ...newCustomer});
        result(null, {id: res.insertId, ...newCustomer});
    });
};

//get all customers
Customer.getAll = (result) => {
    sql.query('SELECT * FROM customers', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log("customers: ", res);
          result(null, res);
    })
}

module.exports = Customer;