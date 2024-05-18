var Cart = require('../models/cart');
async function giohang(req, res, next) {
    Cart.find({}, (error, data) => {
        res.render("cart/cart", { carts: data });
      });
}

async function laydulieu(req,res,next){
    res.render("cart/form-add", {});
}

async function xuatdulieu(req,res,next){
    Cart.create(req.body);
    res.redirect("/cart");
}

module.exports = {
    giohang,
    laydulieu,
    xuatdulieu,
}
