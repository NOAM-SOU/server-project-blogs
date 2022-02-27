const express = require("express");
const router = express.Router();
const models = require("../Models/index");
const { Post } = models;

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.post("/", async (req, res) => {
  const post = new Post(req.body.post);
  const savePost = await post.save();
  res.json(savePost);
});

module.exports = router;
