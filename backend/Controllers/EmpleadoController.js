import  EmpleadoModel  from "../Models/EmpleadoModel.js";

//Metodos para el crud

//Mostrar todos los registros

export const getAllEmpleados = async (req, res) => {
    try {
        const empleados = await EmpleadoModel.findAll()
        res.json(empleados)
    } catch (error) {
        res.json({message: error.message})        
    }
}

//Mostrar un registro

export const getEmpleado = async(req, res)=>{
    try {
        const empleado = await EmpleadoModel.findAll({
            where:{id:req.params.id}
        })
        res.json(empleado[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crear un registro
export const createEmpleado = async (req, res)=>{
    try {
        await EmpleadoModel.create(req.body)
        res.json({"message":"Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actrualizar un registro
export const updateEmpleado = async (req, res)=>{
    try {
        await EmpleadoModel.update(req.body,{
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
export const deleteEmpleado = async (req, res)=>{
    try {
        await EmpleadoModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}