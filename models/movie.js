const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: String,
    userId: { type: mongoose.Schema.Types.ObjectId }, 
});
module.exports = mongoose.model("Movie", MovieSchema);