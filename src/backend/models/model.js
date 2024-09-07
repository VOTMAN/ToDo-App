/* eslint-disable no-undef */
const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    _id: String,
    item: String
});

module.exports = mongoose.model("items", todoSchema);
