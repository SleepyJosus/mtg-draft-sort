const Card = require('../models/card');

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

// function filter(req, res) {
//     console.log(req.query);
//     Card.find({}).sort('pickOrder').exec(
//         function(err, cards) {
//             res.render('filter/index', {
//                 title: 'M20',
//                 user: req.user,
//                 cards,
//                 filter: req.params.filter
//             });
//         }
//     )   
// }