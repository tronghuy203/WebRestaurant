var Blog = require('../models/blog');
async function blog(req, res, next) {
    Blog.find({}, (error, data) => {
        res.render("blog/index", { blogs: data });
      });
}

async function laydulieu(req,res,next){
    res.render("blog/form-add", {});
}

async function xuatdulieu(req,res,next){
    Blog.create(req.body);
    res.redirect("/blog");
}

module.exports = {
    blog,
    laydulieu,
    xuatdulieu,
}
