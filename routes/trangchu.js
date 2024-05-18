var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cart_controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('trangchu', { title: 'Express' });
});
router.get('/', cartController.giohang);

module.exports = router;
