// router.get('/', function(req, res) {
//     request(rootURL + '/?set=M20;page=1', function(err, response, body) {
//       let mtg = JSON.parse(body);
//       request(rootURL + '/?set=M20;page=2', function(err, response, body) {
//         let temp = JSON.parse(body);
//         while(temp.cards.length > 0) {
//           mtg.cards.push(temp.cards.shift());
//         }
//         request(rootURL + '/?set=M20;page=3', function(err, response, body) {
//           temp = JSON.parse(body);
//           while(temp.cards.length > 0) {
//             mtg.cards.push(temp.cards.shift());
//           }
//           request(rootURL + '/?set=M20;page=4', function(err, response, body) {
//             temp = JSON.parse(body);
//             while(temp.cards.length > 0) {
//               mtg.cards.push(temp.cards.shift());
//             }
//             res.render('index', { 
//               title: 'Express',
//               mtg
//             });
//           });
//         });
//       });
//     })
//   });
require('any-promise/register/q');


var request = require('request-promise-any');
var pickOrder = require('../scrapers/pickOrder');

const rootURL = 'https://api.magicthegathering.io/v1/cards'
let cards = []

Promise.all([
    request(rootURL + '/?set=M20;page=1'),
    request(rootURL + '/?set=M20;page=2'),
    request(rootURL + '/?set=M20;page=3'),
    request(rootURL + '/?set=M20;page=4')
])
.then(results => {
    results.forEach(result => {
        JSON.parse(result).cards.forEach(card => {
            cards.push(card);
        });
    })

    cards.forEach(card => {
        card.pickOrder = pickOrder[card.name];
    })

    cards.sort(function(a, b) {
        return a.pickOrder - b.pickOrder;
    })
})

module.exports = cards;

