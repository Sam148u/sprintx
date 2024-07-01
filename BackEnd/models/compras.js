import mongoose from "../config/mongooseConfig.js";

// Definición del esquema de Compra
const CompraSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
    products: [{
        product: {
            type: mongoose.Types.ObjectId,
            ref: "Articulo"
        },
        quantity: Number
    }],
    total: Number,
    paymentMethod: String,
    name: String,
    address: String,
    NumberCard: String,
});

// Modelo de Compra
const Compra = mongoose.model("Compra", CompraSchema);

export default Compra;