const express = require("express");
const router = express.Router();

const chats = require("../models/chats.js");
router.route("/get/all").get(async (req, res) => {
  chats
    .find()
    .then((chat) => {
      res.status(200).json({
        data: chat,
        msg: "Data Fetched",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.route("/add/newchat").post(async (req, res) => {
  const newchat = new chats({
    name: req.body.name,
    image: req.body.image,
    text: req.body.text,
    time: req.body.time,
    profileimage: req.body.profileimage,
  });
  newchat
    .save()
    .then((curr) => {
      res.status(200).json({
        msg: "saved",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
