const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ChefSchema = new Schema({
  HinhAnh: { type: String },
  Ten: { type: String },
  LinkFB: { type: String },
  LinkIT: { type: String },
  LinkYT: { type: String },
});

var ChefModel = mongoose.model("chefs", ChefSchema);

module.exports = ChefModel;
