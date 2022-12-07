import { Sequelize } from "sequelize";

const baseDatos = new Sequelize('empresasys', 'root', '',{
    host:'localhost',
    dialect:'mysql'
})

export default baseDatos;