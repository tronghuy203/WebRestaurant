var Chef = require('../models/chef');
async function chef(req, res, next) {
    Chef.find({}, (error, data) => {
        res.render("chef/index", { chefs: data });
      });
}

async function laydulieu(req,res,next){
    res.render("chef/form-add", {});
}

async function xuatdulieu(req,res,next){
    Chef.create(req.body);
    res.redirect("/chef");
}

module.exports = {
    chef,
    laydulieu,
    xuatdulieu,
}
