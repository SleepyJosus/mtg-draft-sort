var express = require('express');
var router = express.Router();
var cards = require('../models/card')
var pickOrder = require('../scrapers/pickOrder');

router.get('/', function(req, res) {

  // cards.forEach(card => {
  //   card.pickOrder = pickOrder[card.name];
  // })

  // cards.sort(function(a, b) {
  //   return a.pickOrder - b.pickOrder;
  // })

  // console.log(cards);
  
  res.render('index', { 
    title: 'M20 Pick Order',
    cards
  }
)});
     
module.exports = router;
