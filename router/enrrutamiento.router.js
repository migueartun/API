const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/cliente.controller')

router.get('/', clienteController.listar)
router.get('/formulario', clienteController.formulario)

router.get('/:clientes', clienteController.listar)
router.get('/:clientes/:correo', clienteController.consultarId)
router.post('/:clientes', clienteController.registrar)
router.put('/:clientes/:correo', clienteController.actualizar)
router.delete('/:clientes/:correo', clienteController.eliminar)

router.post('/enviar-correo', clienteController.enviarCorreo)

module.exports = router
