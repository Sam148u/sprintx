import express from "express"
import mongoose from "mongoose"

const app= express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/prueba-mongodb")

const ArticuloSchema = mongoose.Schema(
    
    {
        name: String,
        precio: Number,
        talla: String,
        descripcion: String,
    }
)

const articulo = mongoose.model("Articulo", ArticuloSchema)

app.get('/', async function(request,response){

    const listaDeArticulos = await articulo.find()
    response.json(listaDeArticulos)
})

app.get("/api/articulos/:id", async function(request,response){
    try{
        const articuloId = request.params.id
        const Articulo = await articulo.findById(articuloId)

    response.json(Articulo)

    }catch(err){
        response.status(500).json("Error del servidor")
    }
    
})
app.post("/api/articulos", async function(request,response) {
    const data = request.body
    
    // Crear el nuevo usuario
    const nuevoArticulo = await articulo.create({
        name: data.name,
        precio : data.precio,
        talla: data.talla,
        descripcion : data.descripcion,
        
    })
    response.json(nuevoArticulo)
})
app.patch("/api/articulos/:id", async function (req, res) {
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
  });
  
  app.delete("/api/articulos/:id", async function (req, res) {
    // Necesitamos información de parte del request (req) para ELIMINAR un usuario?? ✅ req.params
    // Necesitamos buscar algo en la base de datos?? ❌
    // Tenemos que efectuar alguna acción en relación a la base de datos??
    await articulo.findByIdAndDelete(req.params.id);
    // Armar la respuesta
    res.json("Articulo eliminado");
  });

  const UsuarioSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
  });
  
  const usuario = mongoose.model("Usuario", UsuarioSchema);
  
  app.get("/", (request, response) => {
    const listaDeUsuarios = usuario.find();
    response.json(listaDeUsuarios);
  });
  
  app.get("/api/usuarios/:id", async function (request, response) {
    try {
      const usuarioId = request.params.id;
      const Usuario = await usuario.findById(usuarioId);
  
      response.json(Usuario);
    } catch (err) {
      response.status(500).json("Error del servidor");
    }
  });
  
  app.post("/api/usuarios", async function (request, response) {
    const data = request.body;
  
    // Crear el nuevo usuario
    const nuevoUsuario = await usuario.create({
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      password: data.password,
    });
    response.json(nuevoUsuario);
  });
  
  app.patch("/api/usuarios/:id", async function (req, res) {
    
    const UsuarioEncontrado = await usuario.findById(req.params.id);
    
  
    
  
    UsuarioEncontrado.nombre = req.body.nombre || UsuarioEncontrado.nombre;
    UsuarioEncontrado.apellido = req.body.apellido || UsuarioEncontrado.apellido;
    UsuarioEncontrado.email = req.body.email || UsuarioEncontrado.email;
    UsuarioEncontrado.password = req.body.password || UsuarioEncontrado.password;
  
    await UsuarioEncontrado.save();
  
    // Armar la respuesta
    res.json(UsuarioEncontrado);
  });
  
  app.delete("/api/usuarios/:id", async function (req, res) {
    
    await usuario.findByIdAndDelete(req.params.id);
    // Armar la respuesta
    res.json("Usuario eliminado");
  });

// Definición del esquema de Compra
const CompraSchema = mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Articulo' },
    total: Number
});

// Modelo de Compra
const Compra = mongoose.model("Compra", CompraSchema);

// Rutas para la entidad Compra

// Crear una compra
app.post("/api/compras", async (req, res) => {
    try {
        const { usuario, producto, total } = req.body;
        const nuevaCompra = await Compra.create({
            usuario,
            producto,
            total
        });
        res.json(nuevaCompra);
    } catch (err) {
        res.status(500).json({ message: "Error al crear la compra", error: err });
    }
});

// Obtener todas las compras
app.get("/api/compras", async (req, res) => {
    try {
        const compras = await Compra.find().populate('usuario').populate('producto');
        res.json(compras);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener las compras", error: err });
    }
});

// Obtener una compra por ID
app.get("/api/compras/:id", async (req, res) => {
    try {
        const compra = await Compra.findById(req.params.id).populate('usuario').populate('producto');
        if (!compra) {
            res.status(404).json({ message: "Compra no encontrada" });
        } else {
            res.json(compra);
        }
    } catch (err) {
        res.status(500).json({ message: "Error al obtener la compra", error: err });
    }
});

// Actualizar una compra
app.put("/api/compras/:id", async (req, res) => {
    const { usuario, producto, total } = req.body;
    try {
        const compraActualizada = await Compra.findByIdAndUpdate(
            req.params.id,
            { usuario, producto, total },
            { new: true }
        );
        res.json(compraActualizada);
    } catch (err) {
        res.status(500).json({ message: "Error al actualizar la compra", error: err });
    }
});

// Eliminar una compra
app.delete("/api/compras/:id", async (req, res) => {
    try {
        await Compra.findByIdAndDelete(req.params.id);
        res.json({ message: "Compra eliminada" });
    } catch (err) {
        res.status(500).json({ message: "Error al eliminar la compra", error: err });
    }
});

app.listen(3000, () => {
    console.log("El servidor esta corriendo en el puerto 3000")
})