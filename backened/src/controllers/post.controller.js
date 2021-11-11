const express = require("express");
const router = express.Router();
const Posts = require("../models/posts.model");
const auth = require("../middleware/authenticate");
const autho = require("../middleware/authorize");
router.post("/", auth, async function (req, res) {
  const newPost = await Posts.create({title: req.body.title,body: req.body.body,user: req.user._id,});
  res.send({ newPost });
});
router.get("/", auth,autho(["user","admin"]), async (req, res) => {
  const post = await Posts.find().lean().exec();
  const user=req.user
  return res.send({post,user})
});

module.exports = router;