import db from "../DataBase/db.js"
import { DataTypes } from "sequelize"

const RolModels = db.define('roles', {
    Rol: {type: DataTypes.STRING},
});

export default RolModels;