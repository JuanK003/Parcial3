import db from "../DataBase/db.js"
import { DataTypes } from "sequelize"

const ProductoModel = db.define('productos', {
    NombreProduto: {type: DataTypes.STRING},
    Precio: {type: DataTypes.FLOAT},
    IdTipoProducto: {type: DataTypes.INTEGER},
});

export default ProductoModel;