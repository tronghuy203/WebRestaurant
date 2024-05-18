const mongoose = require("mongoose");

var Schema = mongoose.Schema;

let ttcnSchema = new Schema({
  HoTen: {
    type: String,
  },
  GioiTinh: {
    type: String,
  },
  NgaySinh: {
    type: String,
  },
  DiaChi: {
    type: String,
  },
  SDT: {
    type: String,
  },
});

let Ttcn = mongoose.model("ttcn", ttcnSchema);

module.exports = Ttcn;
