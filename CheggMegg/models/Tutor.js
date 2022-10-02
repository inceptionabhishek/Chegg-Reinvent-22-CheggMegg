const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorSchema = new Schema({
  name: String,
  usename: String,
  email: String,
  password: String,
  profileimage: String,
  totalquestionanswered: Number,
  AmountEarned: {
    type: Number,
    default: 0,
  },
  Rating: {
    type: Schema.Types.Decimal128,
    default: 0.0,
  },
});
module.exports = mongoose.model("Tutor", TutorSchema);
