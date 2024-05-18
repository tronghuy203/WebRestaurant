var User = require("../models/auth");
async function index(req, res, next) {
  res.render("login");
}

async function create(req, res, next) {
console.log(req.body);
  var user = await User.findOne({ username: req.body.uname });
  if (!user) {
    res.render("login");
    return;
  }

  if (user.password != req.body.psw) {
    res.render("login");
    return;
  }
  console.log(user);
  res.render("trangchu");
}

module.exports = {
  index,
  create,
};
