var express = require('express');
var router = express.Router();
var cards = require('../models/card')

router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Express',
    cards
  }
)});
     
module.exports = router;
