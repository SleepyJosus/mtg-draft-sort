const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pickSchema = new Schema({

    name: String,
    pickOrder: Number,
    tier: Number

});

const pickOrderSchema = new Schema({

    name: {
        type: String,
        default: 'untitled'
    },
    userId: String,
    picks: [pickSchema]
    
}, {
    timestamps: true
});

module.exports = mongoose.model('PickOrder', pickOrderSchema);