const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postID: { type: String, trim: true, required: true },
    userID: { type: String, trim: true, required: true },
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    imageURL: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
    });

const Post = mongoose.model("post", postSchema);  // Renamed model to 'Post'
module.exports.Post = {Post};