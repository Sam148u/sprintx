import usuario from "../models/usuarios.js";

async function list(request, response){
    const listaDeUsuarios = usuario.find();
    response.json(listaDeUsuarios);
}

async function find(request, response) {
    try {
      const usuarioId = request.params.id;
      const Usuario = await usuario.findById(usuarioId);
  
      response.json(Usuario);
    } catch (err) {
      response.status(500).json("Error del servidor");
    }
}

async function create(request, response) {
    const data = request.body;
  
    // Crear el nuevo usuario
    const nuevoUsuario = await usuario.create({
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      password: data.password,
    });
    response.json(nuevoUsuario);
}

async function update(req, res) {
    
    const UsuarioEncontrado = await usuario.findById(req.params.id);
    
  
    
  
    UsuarioEncontrado.nombre = req.body.nombre || UsuarioEncontrado.nombre;
    UsuarioEncontrado.apellido = req.body.apellido || UsuarioEncontrado.apellido;
    UsuarioEncontrado.email = req.body.email || UsuarioEncontrado.email;
    UsuarioEncontrado.password = req.body.password || UsuarioEncontrado.password;
  
    await UsuarioEncontrado.save();
  
    // Armar la respuesta
    res.json(UsuarioEncontrado);
}

async function destroy(req, res) {
    
    await usuario.findByIdAndDelete(req.params.id);
    // Armar la respuesta
    res.json("Usuario eliminado");
}

export default{
    list,
    find,
    create,
    update,
    destroy,
}

