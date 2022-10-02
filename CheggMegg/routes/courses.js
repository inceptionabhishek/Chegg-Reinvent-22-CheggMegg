const express = require("express");
const router = express.Router();
const courses = require("../models/courses");

// Add a new courses :
router.post("/add/new", async (req, res) => {
  const teacheremail = req.body.teacheremail;
  const title = req.body.title;
  const desc = req.body.desc;
  const thumbnail = req.body.thumbnail;
  const students = req.body.students;
  const materials = req.body.materials;
  console.log(teacheremail, title, desc, thumbnail);
  const newcourses = new courses({
    teacheremail: teacheremail,
    title: title,
    desc: desc,
    thumbnail: thumbnail,
    students: students,
    materials: materials,
  });
  await newcourses
    .save()
    .then((course) => {
      console.log(course);
      res.json({
        msg: "Added",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// get a course for teacher
router.post("/get/all", async (req, res) => {
  const email = req.body.email;
  courses
    .find({
      teacheremail: email,
    })
    .then((notes) => {
      res.json({
        data: notes,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// get all course
router.get("/all", async (req, res) => {
  courses
    .find()
    .then((allcourse) => {
      res.json({
        data: allcourse,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
