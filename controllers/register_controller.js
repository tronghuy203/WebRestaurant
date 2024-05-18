var User = require("../models/auth");
async function index(req, res, next) {
  res.render("register");
}

async function create(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  if (password == password2 ) {
    User.create({
      username: username,
      password: password,
      password2: password2,
    });
    res.render("login"); 
  }else{
    res.render("register")
  }
 
}

module.exports = {
  index,
  create,
};
