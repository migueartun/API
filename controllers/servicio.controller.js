const modeloServicio = require('../models/servicio.model');

exports.listar = async (req,res) =>{
    try{
        const servicios = await modeloServicio.find();
        res.json(servicios);
    }
    catch (error){
        res.status(500).json({error: error.message})
    }
}

exports.buscarID = async (req,res) =>{
    try{
        const servicios = await modeloServicio.find({nombre:req.params.nombre})
        res.json(servicios)
    }
    catch (error){
        res.status(500).json({error: error.message})
    }
}

exports.eliminar = async (req,res) =>{
    try{
        const servicios = await modeloServicio.findOneAndDelete({nombre:req.params.nombre})
        res.json(servicios)
    }
    catch (error){
        res.status(500).json({error: error.message})
    }
}


exports.registrar = async (req,res) =>{
    try{
        const servicioNuevo = await modeloServicio.create({
            nombre: req.body.nom,
            descripcion: req.body.des,
            duracionMinutos: req.body.dur,
            precio: req.body.pre,
            categoria: req.body.cat
        });
        res.json(servicioNuevo)
    }
    catch (error){
        res.status(500).json({error: error.message})
    }
}

exports.actualizar = async (req,res) =>{
    try{
        servicioNuevo = {
            nombre: req.body.nom,
            descripcion: req.body.des,
            duracionMinutos: req.body.dur,
            precio: req.body.pre,
            categoria: req.body.cat
        }

        const servicios = await modeloServicio.updateOne(
            {nombre:req.params.nombre},
            {$set: servicioNuevo}
        )
        res.json(servicios)
    }
    catch (error){
        res.status(500).json({error: error.message})
    }
}
