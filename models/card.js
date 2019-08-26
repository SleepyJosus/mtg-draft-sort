const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: String,
    manaCost: String,
    cmc: Number,
    colors: [String],
    colorIdentity: [String],
    type: String,
    supertypes: [String],
    types: [String],
    subtypes: [String],
    rarity: String,
    set: String,
    setName: String,
    text: String,
    flavor: String,
    artist: String,
    number: String,
    layout: String,
    multiverseid: Number,
    imageUrl: String,
    pickOrder: {
        type: Number,
        default: null
    },
    tier: {
        type: Number,
        default: null
    }
});

module.exports = mongoose.model('Card', cardSchema);