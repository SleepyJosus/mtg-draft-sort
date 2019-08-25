const Card = require('../models/card');

module.exports = {
    index
}

function index(req, res) {
    Card.find({}).sort('pickOrder').exec(
        function(err, cards) {
            res.render('users/index', {
                title: 'M20',
                user: req.user,
                cards
            });
        })        
    
}