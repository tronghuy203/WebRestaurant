const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CartSchema = new Schema({
  hinh: { type: String },
  ten: { type: String },
  kieu: { type: String },
  dongia: { type: String },
  khung: {type: String},
  khung1: {type: String},
  khung2: {type: String},
});

var CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel;
