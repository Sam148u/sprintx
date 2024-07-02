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

<<<<<<< HEAD
export default Articulo;
=======
export default articulo;




>>>>>>> b890e83 (filter articulos)
