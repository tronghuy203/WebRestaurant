var express = require("express");
var router = express.Router();

const ttcnController = require('../controllers/ttcn_controller')


/* GET home page. */
router.get('/', ttcnController.lay);
router.get('/form-add', ttcnController.formadd);
router.post('/add', ttcnController.add);
router.get('/form-update/:id', ttcnController.formupdate);
router.post('/update', ttcnController.update);
router.get('/form-delete/:id', ttcnController.formdelete);




module.exports = router;
