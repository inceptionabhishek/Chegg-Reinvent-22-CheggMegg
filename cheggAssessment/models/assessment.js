const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Assessment = new Schema({
  id: String,
  class: String,
  type: String,
  subject: String,
  Questions: [
    {
      Question: String,
      image: String,
      Answers: [
        {
          Answer: String,
          isCorrect: String,
        },
      ],
      difficulty: String,
    },
  ],
});
module.exports = mongoose.model("Assessment", Assessment);
