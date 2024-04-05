const mongoose = require('mongoose');

const users_schema = new mongoose.Schema({
    username: String,
    email: String,
    identity: String,
})

module.exports = mongoose.model("User", users_schema);