const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const assessment = require("../models/assessment.js");
// get a assessment
router.route("/get").post((req, res) => {
  const id = req.body.id;
  assessment
    .findOne({ id: id })
    .then((assess) => {
      res.json({
        message: "Fetched",
        Data: assess,
      });
    })
    .catch((err) => {
      res.json({ message: "error" });
    });
});
// Create a assessment
router.route("/add").post((req, res) => {
  const newid = uuidv4();
  const newclass = req.body.class;
  const subject = req.body.subject;
  const type = req.body.type;
  const questions = req.body.Question;
  const newassessment = new assessment({
    id: newid,
    class: newclass,
    type: type,
    subject: subject,
    Questions: questions,
  });
  newassessment
    .save()
    .then((assess) => {
      res.json(assess);
    })
    .catch((err) => {
      res.json({
        msg: "error",
      });
    });
});
// get all assessment according to class
router.route("/get/classwise").post((req, res) => {
  const getclass = req.body.class;
  var tosearch = "class " + getclass;
  assessment
    .find({
      class: tosearch,
    })
    .then((current) => {
      res.json({
        msg: "Fetched",
        data: current,
      });
    })
    .catch((err) => {
      res.json({
        msg: "Error",
      });
    });
});

module.exports = router;
