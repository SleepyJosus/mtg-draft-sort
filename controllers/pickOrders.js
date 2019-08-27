const PickOrder = require('../models/pickOrder');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

module.exports = {
    create,
    show,
    delete: deletePickOrder,
};

function create(req, res) {
    fs.readFile(req.file.path, 'utf8', function(err, data) {
        // console.log(JSON.parse(data));
        console.log(req.body);
        PickOrder.create({picks: JSON.parse(data), userId: req.user._id, name: req.body.name}, function(err, stuff) {
            console.log('here');
            fs.unlink(req.file.path, function(err) {
                if(err) console.error(err);
                res.redirect('/users')
            })
        });
    })
}

function show(req, res) {
    PickOrder.findById(req.params.id, function(err, pickOrder) {
        pickOrder.picks.sort(function(a, b) {
            return a.pickOrder - b.pickOrder;
        });
        res.render('pickOrders/show', {
            title: pickOrder.name,
            pickOrder,
            user: req.user
        })
    })
}

function deletePickOrder(req, res) {
    console.log('here in the delete spot')
    PickOrder.findByIdAndDelete(req.params.id, function(err, pickOrder) {
        if(err) console.error(err);
        res.redirect('/users');
    })
}