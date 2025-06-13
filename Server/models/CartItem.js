const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("CartItem", cartItemSchema);
