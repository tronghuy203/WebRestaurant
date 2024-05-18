var express = require("express");
var router = express.Router();

const nhanxetController = require('../controllers/nhanxet_controller')


/* GET home page. */
router.get('/', nhanxetController.nhanxet);
router.get('/form-add', nhanxetController.laydulieu);
router.post('/add', nhanxetController.xuatdulieu);


module.exports = router;
