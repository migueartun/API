const modeloUsuario = require('../models/usuario.model');
const { sendEmail } = require('../services/email.service');

exports.listarPagina = async (req,res) => {
    try {
        const usuarios = await modeloUsuario.find();
        res.render('pages/usuario', { usuarios });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.listar = async (req,res) => {
    try {
        const usuarios = await modeloUsuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.buscarId = async (req,res) => {
    try {
        const usuario = await modeloUsuario.findOne({email: req.params.email});
        res.json(usuario);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.registrar = async (req,res) => {
    try {
        const usuario = await modeloUsuario.create({
            email: req.body.email,
            password: req.body.password,
            rol: req.body.rol
        });
        // CAMBIAR AQUI: sendEmail(correo_destino, asunto, mensaje)
        sendEmail('migueartun@gmail.com', 'Bienvenido', 'Usuario registrado correctamente')
            .then(() => console.log('Email enviado a', req.body.email))
            .catch(err => console.error('Error al enviar email:', err.message));
        res.json(usuario);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.actualizar = async (req,res) => {
    try {
        await modeloUsuario.updateOne(
            {email: req.params.email},
            {$set: req.body}
        );
        res.json({mensaje: 'Actualizado'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.eliminar = async (req,res) => {
    try {
        await modeloUsuario.findOneAndDelete({email: req.params.email});
        res.json({mensaje: 'Eliminado'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
