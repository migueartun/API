const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/cliente.controller')

router.get('/', clienteController.listar)
router.get('/formulario', clienteController.formulario)
router.get('/:correo', clienteController.consultarId)
router.post('/', clienteController.registrar)
router.put('/:correo', clienteController.actualizar)
router.delete('/:correo', clienteController.eliminar)

module.exports = router
