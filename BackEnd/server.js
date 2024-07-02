import express from "express"
import { expressjwt } from "express-jwt";
import generosController from "./controllers/generosController.js"
import articulosController from "./controllers/articulosController.js"
import usuariosController from "./controllers/usuariosController.js"
import comprasController from "./controllers/comprasController.js"
import cors from "cors"
const app = express();

app.use(cors());
app.use(express.json())

// Rutas para la entidad articulos

app.get("/articulos", articulosController.list)
app.get("/api/articulos/:id", articulosController.find)
app.post("/api/articulos", articulosController.create)
app.patch("/api/articulos/:id", articulosController.update);
app.delete("/api/articulos/:id", articulosController.destroy);

// Ruta para la entidad genero
app.post("/api/generos", generosController.create);

// Rutas para la entidad usuarios

app.get("/api/users", usuariosController.list);
app.get("/api/usuarios/:id", usuariosController.find);
app.post("/api/register", usuariosController.create);
app.patch("/api/usuarios/:id", usuariosController.update);
app.delete("/api/usuarios/:id", usuariosController.destroy);
app.post("/api/login", usuariosController.login);

app.post(
    "/api/users/profile",
    expressjwt({ algorithms: ["HS256"], secret: "whatEver" }),
    usuariosController.profile
  );

// Rutas para la entidad Compra
app.post("/api/compras", expressjwt({ algorithms: ["HS256"], secret: "whatEver" }), comprasController.create);
app.get("/api/compras", comprasController.list);
app.get("/api/compras/:id", comprasController.find);
app.put("/api/compras/:id", comprasController.update);
app.delete("/api/compras/:id", comprasController.destroy);



import mongoose from 'mongoose';
import { getArticulosByGenero } from './controllers/articulosController.js';


// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/prueba-mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Rutas
app.get('/api/articulos', getArticulosByGenero);


app.listen(3000, () => {
    console.log("El servidor esta corriendo en el puerto 3000")
})