const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, default: "abc" },
  password: { type: String },
  password2: { type: String },
});

var UserModel = mongoose.model("demos", UserSchema);

module.exports = UserModel;
