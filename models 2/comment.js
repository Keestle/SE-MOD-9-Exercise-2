const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    commentID: { type: String, trim: true, required: true },
    postID: { type: String, trim: true, required: true },
    userID: { type: String, trim: true, required: true },
    text: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  const Comment = mongoose.model("comment", commentSchema);
  module.exports.Comment = Comment;
