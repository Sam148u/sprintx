import mongoose from 'mongoose';

const ArticuloSchema = new mongoose.Schema(
    
    {
        name: String,
        price: Number,
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

const Articulo = mongoose.model("Articulo", ArticuloSchema)


export default Articulo;







