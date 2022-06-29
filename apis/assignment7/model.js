const mongoose = require("mongoose");

let usersSchema = new mongoose.Schema({
  name: { type: String },
  email: {type: String},
  branch: { type: String },
  password: { type: String }
});

exports.userModel = mongoose.model("users", usersSchema);