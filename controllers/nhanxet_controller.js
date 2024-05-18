var Nhanxet = require('../models/nhanxet');
async function nhanxet(req, res, next) {
    Nhanxet.find({}, (error, data) => {
        res.render("nhanxet/index", { nhanxets: data });
      });
}

async function laydulieu(req,res,next){
    res.render("nhanxet/form-add", {});
}

async function xuatdulieu(req,res,next){
    Nhanxet.create(req.body);
    res.redirect("/nhanxet");
}

module.exports = {
    nhanxet,
    laydulieu,
    xuatdulieu,
}
