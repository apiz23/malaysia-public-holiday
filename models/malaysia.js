const mongoose = require("mongoose");

const malaysiaSchema = new mongoose.Schema({
	name: String,
	dates: Array,
});

const Malaysia = mongoose.model("Malaysia", malaysiaSchema);

module.exports = Malaysia;
