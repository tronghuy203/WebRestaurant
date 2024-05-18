var express = require('express');
var router = express.Router();
const loginController = require('../controllers/login_controller')

router.get('/', loginController.index);
router.post('/', loginController.create);

module.exports = router;
