const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Chat = new Schema({
  name: String,
  image: String,
  text: String,
  time: String,
  profileimage: String,
});

module.exports = mongoose.model("chat", Chat);
