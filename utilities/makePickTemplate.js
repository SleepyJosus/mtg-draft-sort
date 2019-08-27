require('dotenv').config();
require('../config/database');

let fs = require('fs');
let Card = require('../models/card');

Card.find({}, function(err, cards) {
    let pickTemplate = []
    cards.forEach(card => {
        let temp = {
            name: card.name,
            pickOrder: null,
            tier: null
        }
        pickTemplate.push(temp);
    })
    fs.writeFile('utilities/pickTemplate.txt', JSON.stringify(pickTemplate), function(err) {
        if(err) throw(err)
    });
})