import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
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
    const contrasenia = request.body.password;
    const hash = await bcrypt.hash(contrasenia, 10);
    // Crear el nuevo usuario
    const nuevoUsuario = await usuario.create({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: hash,
    });
    response.json(nuevoUsuario);
}

async function update(req, res) {
    
    const UsuarioEncontrado = await usuario.findById(req.params.id);
    
  
    
  
    UsuarioEncontrado.firstname = req.body.firstname || UsuarioEncontrado.firstname;
    UsuarioEncontrado.lastname = req.body.lastname || UsuarioEncontrado.lastname;
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

async function login(req, res) {
  try {
    const user = await usuario.findOne({ email: req.body.email });
    if (user !== null) {
      const hashValido = await bcrypt.compare(req.body.password, user.password);
      if (hashValido) {
        const tokenPayload = {
          sub: user.id, // subject
          iat: Date.now(), // issued at
        };
        const token = jwt.sign(tokenPayload, "whatEver");
        res.json({ token: token });
      } else {
        res.json("Tus credenciales son INCORRECTAS :(");
      }
    } else {
      res.json("Tus credenciales son INCORRECTAS :(");
    }
  } catch (err) {
    res.status(500).json("Internal server error");
  }
}

async function profile(req, res){
  const { email } = await usuario.findById(req.auth.sub);
  res.json(`Hola ${email}, te damos acceso a tu perfil`)
}

export default{
    list,
    find,
    create,
    update,
    destroy,
    login,
    profile,
}

