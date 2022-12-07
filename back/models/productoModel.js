import { DataTypes } from "sequelize";
import baseDatos from "../database/conexionBaseDatos.js";


const Producto = baseDatos.define('productos', {
    nombre: {
        type:DataTypes.STRING
    },
    descripcion: {
        type:DataTypes.STRING
    }
})

export default Producto;