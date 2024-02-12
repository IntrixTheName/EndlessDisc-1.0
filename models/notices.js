//Schema of the "notices" collection, which holds information for the notices board
const mongoose = require('mongoose');

const notice_schema = new mongoose.Schema({
    title: String, //Title of the post, a short description of the notice
    body: String, //The actual substance of the post that contains the useful information
    tags: [String], //Any tags to filter posts by, should be relevant to the notice 
    date: Date
});

module.exports = mongoose.model("Notice", notice_schema);