const mongoose = require('mongoose');

const radio_schema = new mongoose.Schema({
    user: String,
    url: String,
    text: String,
    broadcaster: String,
    description: String,
    category: String,
    image: String
}, 'radio');

module.exports = mongoose.model("Radio", radio_schema);