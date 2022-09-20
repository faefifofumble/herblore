const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  commonName: {
    type: String,
    required: true,
  },
  sciName: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
