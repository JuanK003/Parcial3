import db from "../DataBase/db.js"
import { DataTypes } from "sequelize"

const EmpleadoModel = db.define('empleados', {
    Nombre: {type: DataTypes.STRING},
    Edad: {type: DataTypes.INTEGER},
    Email: {type: DataTypes.STRING},
    Username: {type: DataTypes.STRING},
    Password: {type: DataTypes.STRING},
    IdRol: {type: DataTypes.INTEGER},
});

export default EmpleadoModel;