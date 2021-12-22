const mongoose = require("mongoose");

const collection = "usuarios";

const usuariosSchema = {
  ID: { type: String },
  Contraseña: { type: String, required: true },
  Rol: { type: String}
    
}

const schema = new mongoose.Schema(usuariosSchema);

const Usuarios = mongoose.model(collection, schema);

module.exports = Usuarios;