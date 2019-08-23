var express = require('express');
var router = express.Router();
var passport = require('passport');
var cards = require('../models/card');
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
    cards,
    user: req.user
  }
)});


// OAuth Login Route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Oauth Callback Route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth Logout Route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

     
module.exports = router;
