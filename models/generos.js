import mongoose from "../config/mongooseConfig.js";

const GeneroSchema = mongoose.Schema({

    tipo: String,
  
});

const Genero = mongoose.model("Genero", GeneroSchema);

export default Genero;