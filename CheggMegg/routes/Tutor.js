const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Tutor = require("../models/Tutor.js");
const QuestionDatabase = require("../models/QuestionDatabase.js");

// Get all Tutor
router.get("/getall", (req, res) => {
  Tutor.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
// Validate Tutor
router.route("/validate").post((req, res) => {
  Tutor.findOne({
    email: req.body.email,
    password: req.body.password,
  }).then((tutor) => {
    if (!tutor) {
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
// Add a new Tutor
router.route("/add/newtutor").post((req, res) => {
  Tutor.find({
    email: req.body.email,
  })
    .then((tutor) => {
      if (tutor.length > 0) {
        return res.status(201).json({
          message: "Username already exists",
        });
      } else {
        const newtutor = new Tutor({
          _id: new mongoose.Types.ObjectId(),
          username: req.body.username,
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          profileimage: req.body.profileimage,
          totalquestionanswered: 0,
        });
        console.log(newtutor);
        newtutor
          .save()
          .then((res) => {
            res.status(201).json({
              message: "Tutor added successfully",
            });
          })
          .catch((err) => {
            res.status(201).json({
              message: "Tutor added successfully",
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

// Get all solved Questions of tutor
router.route("/getsolvedquestions").post(async (req, res) => {
  const tutoremail = req.body.tutoremail;
  await QuestionDatabase.find({
    "teacherwhoanswered.email": tutoremail,
  })
    .then((questions) => {
      res.json(questions);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
// Get all questions
router.route("/getallquestions").post(async (req, res) => {
  const tutoremail = req.body.tutoremail;
  await QuestionDatabase.find({
    status: false,
  })
    .then((questions) => {
      res.json(questions);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// Get profile of Tutor
router.route("/getprofile").post((req, res) => {
  Tutor.findOne({
    email: req.body.email,
  })
    .then((tutor) => {
      if (!tutor) {
        return res.status(404).json({
          message: "Tutor not found",
        });
      }
      res.status(200).json({
        profileimage: tutor.profileimage,
        name: tutor.name,
        usename: tutor.usename,
        email: tutor.email,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
