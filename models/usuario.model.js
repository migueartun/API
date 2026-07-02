const mongoose = require('../config/connectiondb');

const usuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    required: true
  }
}, {versionKey: false});

module.exports = mongoose.model('usuarios', usuarioSchema);
