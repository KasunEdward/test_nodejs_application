var express = require('express');
var customers = require('../controllers/customer.js');
var router = express.Router();

// create new customer
router.post('/', customers.create );


module.exports = router;
