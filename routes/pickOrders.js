var express = require('express');
var router = express.Router();
var passport = require('passport');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
var pickOrdersCtrl = require('../controllers/pickOrders');

router.get('/:id', isLoggedIn, pickOrdersCtrl.show);
router.post('/', isLoggedIn, upload.single('pickOrder'), pickOrdersCtrl.create);
router.delete('/:id', isLoggedIn, pickOrdersCtrl.delete);

module.exports = router;

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}