const express = require("express");
const router = express.Router();

const user = require("../models/user.js");

// validate a user
router.route("/login").post((req, res) => {
  user.findOne(
    { email: req.body.email, password: req.body.password },
    (err, student) => {
      if (err) {
        res.json({ msg: "error" });
      } else {
        if (student) {
          console.log(student);
          res.json({ msg: "success" });
        } else {
          res.json({ msg: "error" });
        }
      }
    }
  );
});
// Add a user
router.route("/add").post((req, res) => {
  user
    .find({
      email: req.body.email,
    })
    .then((student) => {
      if (student.length > 0) {
        return res.status(201).json({
          message: "Email already exists",
        });
      } else {
        const student = new user({
          name: req.body.name,
          email: req.body.email,
          image: req.body.image,
          password: req.body.password,
          Assessmenthistory: [],
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

// User takes assignment
router.route("/take/test").post((req, res) => {
  const { email, id, score } = req.body;
  console.log(email, id, score);
  user
    .updateOne(
      { email: email },
      {
        $push: {
          Assessmenthistory: {
            id: id,
            score: score,
          },
        },
      }
    )
    .then((assess) => {
      res.status(201).json({
        message: "Added",
      });
    })
    .catch((err) => {
      res.status(201).json({
        message: "error",
      });
    });
});
// get user data

router.route("/get/data").post((req, res) => {
  const { email } = req.body;
  user.findOne({ email: email }, (err, curruser) => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      if (curruser) {
        res.json({ msg: "success", data: curruser });
      } else {
        res.json({ msg: "error" });
      }
    }
  });
});
// Get all users
router.route("/get/all").get(async (req, res) => {
  const allusers = await user.find();
  res.status(200).json({
    message: "All users",
    data: allusers,
  });
});
module.exports = router;
