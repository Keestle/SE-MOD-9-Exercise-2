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

