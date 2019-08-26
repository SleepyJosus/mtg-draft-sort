const Card = require('../models/card');
const fs = require('fs');

module.exports = {
    index,
    // filter
}

function index(req, res) {
    Card.find({}).sort('pickOrder').exec(
        function(err, cards) {
            res.render('filter/index', {
                title: 'M20',
                user: req.user,
                cards,
                filter: req.query
            });
        }
    )        
}