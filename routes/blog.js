var express = require('express');
var router = express.Router();
const blogController = require('../controllers/blog_controller')

/* GET home page. */
router.get('/', blogController.blog);
router.get('/form-add', blogController.laydulieu);
router.post('/add', blogController.xuatdulieu);

module.exports = router;
