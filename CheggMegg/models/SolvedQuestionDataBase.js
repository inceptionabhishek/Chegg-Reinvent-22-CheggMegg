const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SolvedQuestionSchema = new Schema({
  questionid: String,
  questionTitle: String,
  questionDescription: String,
  questionImage: String,
  tag: String,
  studentemail: String,
  tutoremail: String,
  tutorans: String,
});

module.exports = mongoose.model("SolvedQuestionSchema", SolvedQuestionSchema);
