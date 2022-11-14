import  TipoProductoModel  from "../Models/TiposProductoModel.js";

//Metodos para el crud

//Mostrar todos los registros

export const getAllTipos = async (req, res) => {
    try {
        const tipoproducto = await TipoProductoModel.findAll()
        res.json(tipoproducto)
    } catch (error) {
        res.json({message: error.message})        
    }
}

//Mostrar un registro

export const getTipo = async(req, res)=>{
    try {
        const tipo = await TipoProductoModel.findAll({
            where:{id:req.params.id}
        })
        res.json(tipo[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crear un registro
export const createTipo = async (req, res)=>{
    try {
        await TipoProductoModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actrualizar un registro
export const updateTipo = async (req, res)=>{
    try {
        await TipoProductoModel.update(req.body,{
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
export const deleteTipo = async (req, res)=>{
    try {
        await TipoProductoModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}