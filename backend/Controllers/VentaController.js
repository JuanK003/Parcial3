import  VentaModel  from "../Models/VentaModels.js";

//Metodos para el crud

//Mostrar todos los registros

export const getAllVentas = async (req, res) => {
    try {
        const ventas = await VentaModel.findAll()
        res.json(ventas)
    } catch (error) {
        res.json({message: error.message})        
    }
}

//Mostrar un registro

export const getVenta = async(req, res)=>{
    try {
        const venta = await VentaModel.findAll({
            where:{id:req.params.id}
        })
        res.json(venta[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crear un registro
export const createVenta = async (req, res)=>{
    try {
        await VentaModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actrualizar un registro
export const updateVenta = async (req, res)=>{
    try {
        await VentaModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar un registro
export const deleteVenta = async (req, res)=>{
    try {
        await VentaModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}