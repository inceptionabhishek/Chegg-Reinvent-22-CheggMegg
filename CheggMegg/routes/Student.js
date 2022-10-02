const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Student = require("../models/Student.js");
const QuestionDatabase = require("../models/QuestionDatabase.js");

// Get all students
router.get("/getall", (req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
// Validate student
router.route("/validate").post((req, res) => {
  Student.findOne({
    email: req.body.email,
    password: req.body.password,
  }).then((student) => {
    if (!student) {
      return res.status(201).json({
        message: "Invalid email or password",
      });
    } else {
      return res.status(201).json({
        message: "Successfully logged in",
      });
    }
  });
});
// Add a students
router.route("/add/newstudent").post((req, res) => {
  Student.find({
    email: req.body.email,
  })
    .then((student) => {
      if (student.length > 0) {
        return res.status(201).json({
          message: "Email already exists",
        });
      } else {
        const student = new Student({
          _id: new mongoose.Types.ObjectId(),
          username: req.body.username,
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          profileimage: req.body.profileimage,
          totalquestionsaksed: 0,
        });
        student
          .save()
          .then((result) => {
            res.status(201).json({
              message: "Student added successfully",
            });
          })
          .catch((err) => {
            res.status(500).json({
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// Ask a new Question
router.route("/askquestion").post((req, res) => {
  Student.findOne({
    email: req.body.email,
  })
    .then((student) => {
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }
      student.UnsolvedQuestions.push({
        uniqueId: req.body.uniqueId,
        title: req.body.title,
        description: req.body.description,
        QuestionImage: req.body.QuestionImage,
        answertext: req.body.answertext,
        answerimage: req.body.answerimage,
        tag: req.body.tag,
      });
      
      student
        .save()
        .then((result) => {
          res.status(201).json({
            message: "Question asked",
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
// Get all solved Questions
router.route("/getsolvedquestions").post((req, res) => {
  console.log(req.body.email);
  QuestionDatabase.findOne({
    email: req.body.email,
    status: true,
  })
    .then((student) => {
      console.log(student);
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }
      res.status(200).json({
        SolvedQuestions: student.SolvedQuestions,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });

  // Find all unsolved questions
});
// Get all unsolved Questions
router.route("/getunsolvedquestions").post((req, res) => {
  Student.findOne({
    email: req.body.email,
  })
    .then((student) => {
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }
      res.status(200).json({
        UnsolvedQuestions: student.UnsolvedQuestions,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
// Delete a question
router.route("/deletequestion").post((req, res) => {
  QuestionDatabase.findByIdAndDelete(req.body.id)
    .then((result) => {
      res.status(200).json({
        message: "Question deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
// Update a Question
router.route("/updatequestion").post((req, res) => {
  QuestionDatabase.findByIdAndUpdate(req.body.id, {
    questiontitle: req.body.title,
    questiondescription: req.body.description,
    questionimage: req.body.QuestionImage,
  })
    .then((result) => {
      res.status(200).json({
        message: "Question Updated",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// Get profile of Student
router.route("/getprofile").post((req, res) => {
  Student.findOne({
    email: req.body.email,
  })
    .then((student) => {
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }
      res.status(200).json({
        profileimage: student.profileimage,
        name: student.name,
        usename: student.usename,
        email: student.email,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// Updated Profile 


module.exports = router;
