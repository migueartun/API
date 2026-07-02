const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuario.controller')

router.get('/', usuarioController.listar)
router.get('/pagina', usuarioController.listarPagina)
router.get('/:email', usuarioController.buscarId)
router.post('/', usuarioController.registrar)
router.post('/enviar-correo', usuarioController.enviarCorreo)
router.put('/:email', usuarioController.actualizar)
router.delete('/:email', usuarioController.eliminar)



module.exports = router
