var Ttcn = require("../models/ttcn");

const ttcnController = {
  lay: async (req, res, next) => {
    Ttcn.find({}, (error, data) => {
      res.render("ttcn/index", { ttcns: data });
    });
  },
  formadd: async (req, res, next) => {
    res.render("ttcn/form-add", {});
  },
  add: async (req, res, next) => {
    Ttcn.create(req.body);
    res.redirect("/ttcn");
  },
  formupdate:  function (req, res, next) {
    Ttcn.findById(req.params.id, (error, data) => {
      res.render("ttcn/form-update", { ttcn: data });
    });
  },
  update: function (req, res, next) {
    Ttcn.findByIdAndUpdate(req.body.id, req.body, (error, data) => {
      res.redirect("/ttcn");
    });
  },
  formdelete: function (req, res, next) {
    Ttcn.findByIdAndDelete(req.params.id, (error, data) => {
      res.redirect("/ttcn");
    });
  },
};

module.exports = ttcnController;
