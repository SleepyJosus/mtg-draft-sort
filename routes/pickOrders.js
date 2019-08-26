var express = require('express');
var router = express.Router();
var passport = require('passport');
var pickOrdersCtrl = require('../controllers/pickOrders');

/* GET users listing. */
router.post('/', isLoggedIn, pickOrdersCtrl.create);

module.exports = router;

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}