require('dotenv').config();
require('../config/database');

let PickOrder = require('../models/pickOrder');

PickOrder.find({}, function(err, pickOrders) {
    console.log(pickOrders);
})