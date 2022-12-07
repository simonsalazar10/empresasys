import Producto from "../models/productoModel.js";

const mostrarCliente = async (req, res) =>{
try {
    
} catch (error) {
    
}

}


const crearCliente = async (req, res) => {
    try {

        await Cliente.create(req.body)
        res.json({
            message:'Usuario Creado Correctamente'
        })
        
    } catch (error) {
        res.json({
            message:'No se pudo registrar el usuario'+ error
        })
        
    }

};


const editarCliente = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
};


const eliminarCliente = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
};


export {
    crearCliente
}