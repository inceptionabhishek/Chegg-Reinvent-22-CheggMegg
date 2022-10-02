const express = require("express");
const router = express.Router();
const QuestionDataBase = require("../models/QuestionDatabase.js");
// Add a new Question in the Question database :-
router.post("/askquestion", async (req, res) => {
  const {
    questiontitle,
    questiondescription,
    questionimage,
    studentwhoaskedemail,
    tag,
  } = req.body;
  const status = false;
  const teacherwhoanswered = [];
  const newQuestion = new QuestionDataBase({
    questiontitle,
    questiondescription,
    questionimage,
    status,
    studentwhoaskedemail,
    teacherwhoanswered,
    tag
  });
  await newQuestion
    .save()
    .then((question) => {
      res.json(question);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// Get a unsolved Question for a particular student
router.post("/getunsolvedquestion", async (req, res) => {
  const { email } = req.body;
  QuestionDataBase.find({
    studentwhoaskedemail: email,
    status: false,
  })
    .then((question) => {
      res.json(question);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// Get a specific question from id
router.post("/getquestion", async (req, res) => {
  const { question_id } = req.body;
  const email = req.body.email;
  QuestionDataBase.findOne({
    _id: question_id,
  })
    .then((question) => {
      res.json(question);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
