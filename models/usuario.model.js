const mongoose = require('../config/connectiondb');

const usuarioSchema = new mongoose.Schema({



   email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Correo inválido']
    },


   password: {
        type: String,
        trim: true,
        minLength: [7, 'ingresaste una contraseña muy corta'],
        maxLength: [10, 'La contraseña no puede tener mas de 10 caracteres']


    },
    rol: {
        type: String,
        default: 'invitado',
        enum: ['cliente', 'empleado', 'administrador']


    }
},{versionKey:false});






module.exports = mongoose.model('usuarios', usuarioSchema);
