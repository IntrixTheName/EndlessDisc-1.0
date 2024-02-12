const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/endless-disc');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/endless-disc');
    const post_scheme = new mongoose.Schema({
        title: String,
        body: String,
        tags: [String],
        date: Date
    })
    const post = mongoose.model("post", post_scheme);

    let posts = await post.find();
    console.log(posts);
}
