const mongoose = require('mongoose');

const radio_schema = new mongoose.Schema({
    user: String,
    title: String,
    broadcaster: String,
    url: String,
}, 'radio');

module.exports = mongoose.model("Radio", radio_schema);