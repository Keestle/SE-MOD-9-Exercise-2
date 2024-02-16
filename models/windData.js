const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const windDataSchema = new Schema({
speed: { type: Number },
degrees: { type: Number },
gust: { type: Number },
createdAt: { type: Date, default: Date.now},
updatedAt: { type: Date, default: Date.now},});

module.exports= mongoose.model("windData", windDataSchema);