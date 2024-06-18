import mongoose from "../config/mongooseConfig.js";

const ArticuloSchema = mongoose.Schema(
    
    {
        name: String,
        price: String,
        imageUrl: String,
        talla: String,
        descripcion: String,
        generos: [
            {
              type: mongoose.Types.ObjectId,
              ref: "Genero",
            },
          ],
    }
)

const articulo = mongoose.model("Articulo", ArticuloSchema)

export default articulo;