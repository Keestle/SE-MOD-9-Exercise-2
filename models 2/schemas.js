const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
userID: { type: String, trim: true, required: true },
Username: { type: String, trim: true, required: true },
email: { type: String, trim: true, required: true, unique:
true },
password: { type: String },
});

const User = mongoose.model("user", userSchema);  // Renamed model to 'User'
module.exports.User = User;

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
module.exports.Post = Post;


const likeSchema = new Schema({
  likeID: { type: String, trim: true, required: true },
  postID: { type: String, trim: true, required: true },
  userID: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Like = mongoose.model("like", likeSchema);
module.exports.Like = Like;

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

