const modeloCliente = require('../models/cliente.model');


exports.home = async (req,res)=>{
  res.render('pages/index');
}

exports.listar = async (req,res)=>{
  try {
    const clientes = await modeloCliente.find();
    res.render('pages/index3', { clientes, mensaje: req.query.mensaje || '' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.formulario = async (req,res)=>{
  res.render('pages/registrar');
}

exports.consultarId = async (req,res)=>{
  try {
    const cliente = await modeloCliente.findOne({email:req.params.correo});
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.registrar = async (req,res)=>{
  try {
    await modeloCliente.create({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    });
    res.redirect('/clientes');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



exports.actualizar = async (req,res)=>{
  try {
    await modeloCliente.updateOne(
        {email:req.params.correo},
        {$set: {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }});
    res.redirect('/clientes');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.eliminar = async (req,res)=>{
  try {
    await modeloCliente.findOneAndDelete({email:req.params.correo});
    res.redirect('/clientes');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}






