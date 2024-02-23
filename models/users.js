const mongoose = require('mongoose');

const users_schema = new mongoose.Schema({
    username: String,
    email: String,
    identity: String,
    roles: [String],
    groups: [String],
    radio: [{
        url: String,
        title: String,
        desc: String
    }]
})

module.exports = mongoose.model("User", users_schema);