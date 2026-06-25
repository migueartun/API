const express = require('express')
const router = express.Router()
const servicioController = require('../controllers/servicio.controller')

router.get('/', servicioController.listar)
router.get('/:nombre', servicioController.buscarID)
router.post('/', servicioController.registrar)
router.put('/:nombre', servicioController.actualizar)
router.delete('/:nombre', servicioController.eliminar)

module.exports = router
