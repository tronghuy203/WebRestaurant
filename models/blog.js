const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  HinhAnh: { type: String },
  NgayThang: { type: String },
  Ten: { type: String },
  NoiDung: {type: String},
});

var BlogModel = mongoose.model("blogs", BlogSchema);

module.exports = BlogModel;
