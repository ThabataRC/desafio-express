const express = require('express');
const router = express.Router();
const clientescontroller = require('../controllers/clientescontroller');
const clientenomeMiddleware = require('../middleware/clientenomeMiddleware');
const clientesobrenomeMiddleware = require('../middleware/clientesobrenomeMiddleware');
const clienteidadeMiddleware = require('../middleware/clienteidadeMiddleware');
const clienteemailMiddleware = require('../middleware/clienteemailMiddleware');


/* GET clientes listing. */
router.get('/',
    clientescontroller.findAll);

/* Put clientes listing. */
router.put('/',
    clientescontroller.update);

/* Post clientes listing. */
router.post('/',
    clientenomeMiddleware.validateName,
    clientesobrenomeMiddleware.validateFamilyName,
    clienteidadeMiddleware.validateAge,
    clienteemailMiddleware.validateEmail,
    clientescontroller.save);

/* Delete clientes listing. */
router.delete('/:id', clientescontroller.remove);

/* POST clientes com validação de middlewares */

module.exports = router;

