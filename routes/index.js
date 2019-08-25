var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res) {
  res.render('index', { 
    title: 'MTG Draft Sort',
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
    successRedirect : '/users',
    failureRedirect : '/'
  }
));

// OAuth Logout Route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

     
module.exports = router;
