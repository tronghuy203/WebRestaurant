var express = require('express');
var router = express.Router();
const registerController = require('../controllers/register_controller')

router.get('/', registerController.index);
router.post('/', registerController.create);

module.exports = router;
