import { Sequelize } from "sequelize";

const db = new Sequelize('bocadopanaderia', 'root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db