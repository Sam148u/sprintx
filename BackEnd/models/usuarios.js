import mongoose from "../config/mongooseConfig.js";

const UsuarioSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
  });

  
  
const Usuario = mongoose.model("Usuario", UsuarioSchema);

export default Usuario;