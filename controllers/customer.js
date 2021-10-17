const Customer = require('../models/customer.js');

// create new customer
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
};

// get all customers
exports.getAll = (req, res) => {
    try{
        Customer.getAll((err, data) => {
            if(err){
                res.status(500).send({
                    message: err.message || 'get customers error'
                })
            }else{
                res.status(200).send(data);
            }
        })

    }catch(e){
        throw new Error(ex.toString());
    }
}

// update customer
exports.update = (req, res) => {
    try{

        if(!req.body){
            res.status(400).send({
                message: 'empty content'
            });
        }

        Customer.update(req.params.customerId, new Customer(req.body), (err, data) => {
            if(err){
                if (err.kind === "not_found") {
                    res.status(404).send({
                      message: `Not found Customer with id ${req.params.customerId}.`
                    });
                  } else {
                    res.status(500).send({
                      message: "Error updating Customer with id " + req.params.customerId
                    });
                  }
            }else{
                res.status(200).send(data);
            }
        })

    }catch(e){
        throw new Error(ex.toString());
    }
}