//Modularizacion de la conexion
import mongoose from "mongoose"

//mongoose.connect("mongodb://localhost:27017/prueba-mongodb")
mongoose.connect("mongodb://database:27017/prueba-mongodb")
export default mongoose;