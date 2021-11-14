const sql = require('./db.js');

// constructor
const Customer = function (customer) {
    this.email = customer.email,
        this.name = customer.name,
        this.active = customer.active
}

//create new customer
Customer.create = (newCustomer, result) => {
    sql.query('INSERT INTO customers SET ?', newCustomer, (err, res) => {
        if (err) {
            console.log('error:', err);
            result(err, null);
            return;
        }
        console.log('created customer:', { id: res.insertId, ...newCustomer });
        result(null, { id: res.insertId, ...newCustomer });
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

//update customer
Customer.update = (id, customer, result) => {
    sql.query('UPDATE customers SET name = ?, email = ?, active = ? WHERE id = ?',
        [customer.name, customer.email, customer.active, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows === 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated customer: ", { id: id, ...customer });
            result(null, { id: id, ...customer });
        }
    );


}
module.exports = Customer;