import db from "../DataBase/db.js"
import { DataTypes } from "sequelize"

const TipoProductoModel = db.define('tipoproductos', {
    Tipo: {type: DataTypes.STRING},
});

export default TipoProductoModel;