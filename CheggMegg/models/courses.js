const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Courses = new Schema({
  teacheremail: String,
  title: String,
  desc: String,
  thumbnail: String,
  students: [
    {
      email: String,
    },
  ],
  materials: [
    {
      links: String,
    },
  ],
});
module.exports = mongoose.model("courses", Courses);
