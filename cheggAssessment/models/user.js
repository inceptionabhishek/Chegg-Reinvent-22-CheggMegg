const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  image: String,
  email: String,
  password: String,
  Assessmenthistory: [
    {
      id: String,
      score: String,
    },
  ],
});

module.exports = mongoose.model("user", User);
