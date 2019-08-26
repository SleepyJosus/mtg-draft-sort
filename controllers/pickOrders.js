const PickOrder = require('../models/pickOrder');
const fs = require('fs');
const path = require('path');

module.exports = {
    create,
}

function create(req, res) {
    // fs.readFile(path.resolve(__dirname, req.body.fileupload), (err, data) => {
    //     if (err) return console.error(err);
    //     console.log(data);
    // });
    res.redirect('/users')
}