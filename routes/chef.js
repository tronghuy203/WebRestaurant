var express = require('express');
var router = express.Router();
const chefController = require('../controllers/chef_controller')

/* GET home page. */
router.get('/', chefController.chef);
router.get('/form-add', chefController.laydulieu);
router.post('/add', chefController.xuatdulieu);

module.exports = router;
