import db from "../DataBase/db.js"
import { DataTypes } from "sequelize"

const VentaModel = db.define('ventas', {
    FechaVenta: {type: DataTypes.DATE},
    Cantidad: {type: DataTypes.INTEGER},
    IdEmpleado: {type: DataTypes.INTEGER},
    IdProducto: {type: DataTypes.INTEGER},
});

export default VentaModel;