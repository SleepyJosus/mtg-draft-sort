require('any-promise/register/q');

require('dotenv').config();
require('../config/database');

var request = require('request-promise-any');
var pickOrder = require('../scrapers/pickOrder');
var Card = require('../models/card');

const rootURL = 'https://api.magicthegathering.io/v1/cards'

// Card.deleteMany({}, function(err) {
//     if(err) throw (err);
// })

Promise.all([
    request(rootURL + '/?set=M20;page=1'),
    request(rootURL + '/?set=M20;page=2'),
    request(rootURL + '/?set=M20;page=3'),
    request(rootURL + '/?set=M20;page=4')
])
.then(results => {
    results.forEach(result => {
        JSON.parse(result).cards.forEach(card => {
            Card.create({
                name: card.name,
                manaCost: card.manaCost,
                cmc: card.cmc,
                colors: card.colors,
                colorIdentity: card.colorIdentity,
                type: card.type,
                supertypes: card.supertypes,
                types: card.types,
                subtypes: card.subtypes,
                rarity: card.rarity,
                set: card.set,
                setName: card.setName,
                text: card.text,
                flavor: card.flavor,
                artist: card.artist,
                number: card.number,
                layout: card.layout,
                multiverseid: card.multiverseid,
                imageUrl: card.imageUrl,
                pickOrder: pickOrder[card.name]
            });
        });
    });
});