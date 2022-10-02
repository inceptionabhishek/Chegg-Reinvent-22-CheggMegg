const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  name: String,
  email: String,
  password: String,
  profileimage: String,
});
module.exports = mongoose.model("Admin", AdminSchema);
