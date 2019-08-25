var express = require('express');
var router = express.Router();
var filterCtrl = require('../controllers/filter');

router.get('/', filterCtrl.index);
// router.get('/:filter', filterCtrl.filter)

module.exports = router;
