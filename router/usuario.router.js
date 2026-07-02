const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuario.controller')

router.get('/', usuarioController.listar)
router.get('/:email', usuarioController.buscarId)
router.post('/', usuarioController.registrar)
router.put('/:email', usuarioController.actualizar)
router.delete('/:email', usuarioController.eliminar)

module.exports = router
