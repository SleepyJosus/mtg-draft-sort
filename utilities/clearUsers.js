require('dotenv').config();
require('../config/database');

let User = require('../models/user');

User.deleteMany({}, function(err) {});