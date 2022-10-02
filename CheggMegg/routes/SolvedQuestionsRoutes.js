const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const SolvedQuestions = require("../models/SolvedQuestionDataBase.js");
const unsolvedQuestionDatabase = require("../models/QuestionDatabase.js");

// Add solved question
router.post("/add/tutor", async (req, res, next) => {
  const solvedQuestion = new SolvedQuestions({
    id: req.body.id,
    questionTitle: req.body.questionTitle,
    questionDescription: req.body.questionDescription,
    questionImage: req.body.questionImage,
    studentemail: req.body.studentemail,
    tutoremail: req.body.tutoremail,
    tutorans: req.body.tutorans,
  });
  await solvedQuestion
    .save()
    .then(() => {
      res.status(201).json({
        message: "Solved question added successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });

  // Update the question to solved
  const question = await unsolvedQuestionDatabase.findOne({ _id: req.body.id });
  question.status = true;
  await question
    .save()
    .then(() => {
      console.log("Question updated successfully");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Get solved Questions for Tutor
router.post("/view/tutor", async (req, res) => {
  const solvedQuestion = await SolvedQuestions.find({
    tutoremail: req.body.tutoremail,
  });
  res.status(200).json({
    message: "Solved questions fetched successfully",
    data: solvedQuestion,
  });
});

// Get solved questions for Students
router.post("/view/student", async (req, res) => {
  console.log(req.body.studentemail);
  const solvedQuestion = await SolvedQuestions.find({
    studentemail: req.body.studentemail,
  });
  
  res.status(200).json({
    message: "Solved questions fetched successfully",
    data: solvedQuestion,
  });
});
// Get all solved questions
router.get("/view/all", async (req, res) => {
  const solvedQuestion = await SolvedQuestions.find();
  res.status(200).json({
    message: "Solved questions fetched successfully",
    data: solvedQuestion,
  });
});




module.exports = router;
