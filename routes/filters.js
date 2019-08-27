var express = require('express');
var router = express.Router();
var filtersCtrl = require('../controllers/filters');

router.get('/', filtersCtrl.index);
router.get('/:id', isLoggedIn, filtersCtrl.applyPickOrder);
// router.get('/:filter', filterCtrl.filter)

module.exports = router;

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }