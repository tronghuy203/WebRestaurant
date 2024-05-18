const mongoose = require("mongoose");

var Schema = mongoose.Schema;

let nhanxetSchema = new Schema({
  HoTen: {
    type: String,
  },
  HinhAnh: {
    type: String,
  },
  NoiDung: {
    type: String,
  },
  Sao:{
    type: String,
  }
});

let Nhanxet = mongoose.model("nhanxet", nhanxetSchema);

module.exports = Nhanxet;
