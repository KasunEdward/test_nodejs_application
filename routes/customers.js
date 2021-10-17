var express = require('express');
var customers = require('../controllers/customer.js');
const { route } = require('./index.js');
var router = express.Router();

// create new customer
router.post('/', customers.create );

// get customers list
router.get('/', customers.getAll)

// update customer
router.put('/:customerId', customers.update)


module.exports = router;
