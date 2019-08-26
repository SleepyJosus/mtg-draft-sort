const User = require('../models/user');
const PickOrder = require('../models/pickOrder');

module.exports = {
    index
}

function index(req, res) {
    PickOrder.find({userId: req.user._id}).exec(function(err, pickOrders) {
        res.render('users/index', {
            title: req.user.name,
            user: req.user,
            pickOrders
        })
    });
}