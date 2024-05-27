// Traer el modelo Address
import Genero from "../models/generos.js";

async function create(request,response) {
    const data = request.body
    
    // Crear el nuevo usuario
    const nuevoGenero = await Genero.create({

        tipo: data.tipo,
        
        
    })
    response.json(nuevoGenero)
}

export default {
    create,
}