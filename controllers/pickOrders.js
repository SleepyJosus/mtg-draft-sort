const PickOrder = require('../models/pickOrder');
const Card = require('../models/card');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

module.exports = {
    import: importPickOrder,
    create,
    show,
    update,
    delete: deletePickOrder,
};

function importPickOrder(req, res) {
    fs.readFile(req.file.path, 'utf8', function(err, data) {
        PickOrder.create({picks: JSON.parse(data), userId: req.user._id, name: req.body.name}, function(err, stuff) {
            fs.unlink(req.file.path, function(err) {
                if(err) console.error(err);
                res.redirect('/users')
            })
        });
    })
}

function create(req, res) {
    Card.find({}).sort('name').exec(function(err, cards) {
        let picks = [];
        let count = 1
        cards.forEach((card, idx) => {
            if(card.imageUrl) {
                let temp = {
                    name: card.name,
                    pickOrder: count,
                    tier: 1
                }
                count++
                picks.push(temp);
            }
        })
        PickOrder.create({picks: picks, userId: req.user._id, name: 'New Pick Order'}, function(err) {
            res.redirect('/users');
        });
    });
}

function show(req, res) {
    PickOrder.findById(req.params.id, function(err, pickOrder) {
        pickOrder.picks.sort(function(a, b) {
            return a.pickOrder - b.pickOrder;
        });
        pickOrder.set = "M20";
        Card.find({set: pickOrder.set}, function(err, cards) {
            let imageUrls = {}
            cards.forEach(card => {
                imageUrls[card.name] = card.imageUrl
            })
            res.render('pickOrders/show', {
                title: pickOrder.name,
                pickOrder,
                imageUrls,
                user: req.user
            })
        })
    })
}

function update(req, res) {
    let picks = []
    for(let i = 0; i < req.body.name.length; i++) {
        let temp = {
            name: req.body.name[i],
            pickOrder: req.body.pickOrder[i],
            tier: req.body.tier[i]
        }
        picks.push(temp);
    }
    PickOrder.findByIdAndUpdate(req.params.id, { picks: picks, name: req.body.pickOrderName }, function(err) {
        res.redirect(`/pickOrders/${req.params.id}`)
    })
}

function deletePickOrder(req, res) {
    PickOrder.findByIdAndDelete(req.params.id, function(err) {
        if(err) console.error(err);
        res.redirect('/users');
    })
}