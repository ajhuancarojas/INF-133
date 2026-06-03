import { DataTypes } from 'sequelize';
import { sequelize } from '../config/bd.js';

export const Categoria = sequelize.define(
'Categoria',
{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    descripcion:{
        type:DataTypes.STRING(255)
    }
},
{
    tableName:'categorias',
    timestamps:true
});