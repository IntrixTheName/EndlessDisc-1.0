//Schema of the "songs" collection, which holds metadata about tracks in the library
const mongoose = require('mongoose');

const songs_schema = new mongoose.Schema({
    title: String,
    artist: String,
    filename: String,
    last_modified: Date,
    metadata: [{
        tag_name: String,
        tag_value: String
    }]
});

module.exports = mongoose.model("Song", songs_schema);