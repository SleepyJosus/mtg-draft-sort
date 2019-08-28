const Card = require('../models/card');
const PickOrder = require('../models/pickOrder');
const fs = require('fs');

module.exports = {
    index,
    applyPickOrder,
}

function index(req, res) {
    Card.find({}).sort('name').exec(
        function(err, cards) {
            res.render('filters/index', {
                title: 'M20',
                user: req.user,
                cards,
                filter: req.query,
                pickOrder: null,
                tier: false,
            });
        }
    )        
}

function applyPickOrder(req, res) {
    Card.find({}, function(err, cards) {
        PickOrder.findById(req.params.id, function(err, pickOrder) {
            cards.forEach(card => {
                pickOrder.picks.forEach(pick => {
                    if(card.name === pick.name) {
                        card.pickOrder = pick.pickOrder;
                        card.tier = pick.tier;
                    }
                })
            })
            cards.sort(function(a,b) {
                return a.pickOrder - b.pickOrder
            })

            res.render('filters/index', {
                title: 'M20',
                user: req.user,
                cards,
                filter: req.query,
                pickOrder: req.params.id,
                tier: true,
            });
        })
    });        
}