const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionDatabaseSchema = new Schema({
  questiontitle: String,
  questiondescription: String,
  questionimage: String,
  tag: String,
  status: {
    type: Boolean,
    default: false,
  },
  studentwhoaskedemail: String,
  teacherwhoanswered: [
    {
      email: String,
      answer: String,
    },
  ],
});

module.exports = mongoose.model("QuestionDatabase", QuestionDatabaseSchema);
