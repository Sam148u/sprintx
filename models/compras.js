import mongoose from "../config/mongooseConfig.js";

// Definición del esquema de Compra
const CompraSchema = mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Articulo' },
    total: Number
});

// Modelo de Compra
const Compra = mongoose.model("Compra", CompraSchema);

export default Compra;