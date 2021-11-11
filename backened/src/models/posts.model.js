const mongoose = require("mongoose");
const user = require("./user.model");

const mongooseSchmea = new mongoose.Schema({
  title: { type: "string", required: true },
  body: { type: "string", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: user },
});

const Post = mongoose.model("Post", mongooseSchmea);
module.exports = Post;