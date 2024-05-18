var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cart_controller')

router.get('/', cartController.giohang);
router.get('/form-add', cartController.laydulieu);
router.post('/add', cartController.xuatdulieu);
module.exports = router;
