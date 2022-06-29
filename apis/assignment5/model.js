const mongoose = require("mongoose");

let usersSchema = new mongoose.Schema({
  name: {type: String },
  age :{type: Number}
});

exports.userModel = mongoose.model("users5", usersSchema);