const Customer = require('../models/customer.js');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: 'empty content'
        });
    }

    const {email, name, active, ...rest} = req.body;

    // create a customer
    const customer = new Customer({
        email: email,
        name: name,
        active: active
    });

   // insert customer data
    Customer.create(customer, (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'customer create error'
            })
        }else{
            res.status(201).send(data);
        }
    });

}