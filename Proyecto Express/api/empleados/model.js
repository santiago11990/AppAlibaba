const mongoose = require("mongoose");

const collection = "empleados";

const empleadosSchema = {
  nombre: { type: String, required: true },
  ID: { type: String },
  Contraseña: { type: String, required: true },
  Fecha: { type: Date, required: true },
 
}
const options = {
  timestamps: true,
}
const schema = new mongoose.Schema(empleadosSchema, options);

const Empleados = mongoose.model(collection, schema);

module.exports = Empelados;