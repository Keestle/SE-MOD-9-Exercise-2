const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const likeSchema = new Schema({
    likeID: { type: String, trim: true, required: true },
    postID: { type: String, trim: true, required: true },
    userID: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  
  const Like = mongoose.model("like", likeSchema);
  module.exports.Like = Like;