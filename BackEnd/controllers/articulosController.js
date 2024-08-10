// Traer el modelo User
import articulo from "../models/articulos.js";


async function list(request,response){

    const listaDeArticulos = await articulo.find().populate('');
    response.json(listaDeArticulos)
}

async function find(request,response){
    try{
        const articuloId = request.params.id
        const Articulo = await articulo.findById(articuloId).populate('');

    response.json(Articulo)

    }catch(err){
        response.status(500).json("Error del servidor")
    }
    
}

async function create(request,response) {
    const data = request.body
    
    // Crear el nuevo usuario
    const nuevoArticulo = await articulo.create({
        name: data.name,
        price : data.precio,
        imageUrl: data.imageUrl,
        talla: data.talla,
        descripcion : data.descripcion,
        
        
    })
    response.json(nuevoArticulo)
}

async function update(req, res) {
    // Necesitamos información de parte del request (req) para EDITAR un usuario?? ✅ req.body
    // Necesitamos buscar algo en la base de datos?? ✅
    const ArticuloEncontrado = await articulo.findById(req.params.id);
    // Tenemos que efectuar alguna acción en relación a la base de datos?? ✅
  
    // Me están pasando el dato por req.body? Si es asi, vamos con eso. Sino, dejamos el valor que ya había
  
    ArticuloEncontrado.name =
      req.body.name || ArticuloEncontrado.name;
    ArticuloEncontrado.precio = req.body.precio || ArticuloEncontrado.precio;
    ArticuloEncontrado.talla = req.body.talla || ArticuloEncontrado.talla;
    ArticuloEncontrado.descripcion = req.body.descripcion || ArticuloEncontrado.descripcion;
    
  
    await ArticuloEncontrado.save();
  
    // Armar la respuesta
    res.json(ArticuloEncontrado);
}

async function destroy(req, res) {
    // Necesitamos información de parte del request (req) para ELIMINAR un usuario?? ✅ req.params
    // Necesitamos buscar algo en la base de datos?? ❌
    // Tenemos que efectuar alguna acción en relación a la base de datos??
    await articulo.findByIdAndDelete(req.params.id);
    // Armar la respuesta
    res.json("Articulo eliminado");
}

export default {
    list,
    find,
    create,
    update,
    destroy,
};



// Función para obtener artículos por género
