import mongoose from 'mongoose';

const ArticuloSchema = new mongoose.Schema(
    
    {
        name: String,
        price: Number,
        imageUrl: String,
        talla: String,
        descripcion: String,
        
    }
)

const Articulo = mongoose.model("Articulo", ArticuloSchema)


export default Articulo;







