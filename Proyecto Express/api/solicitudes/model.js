const mongoose = require("mongoose");

const collection = "solicitudes";

const solicitudesSchema = {
  nombre: { type: String, required: true },
  ID: { type: String, required: true},
  Tipo: {type: String, required: true},
  Fecha: { type: Date, required: true },
  Detalles: { type: String, required: true },
}
const options = {
  timestamps: true,
}
const schema = new mongoose.Schema(solicitudesSchema, options);

const Solicitudes = mongoose.model(collection, schema);

module.exports = Solicitudes;