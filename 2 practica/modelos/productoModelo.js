import { DataTypes } from 'sequelize';
import { sequelize } from '../config/bd.js';
import { Categoria } from './categoriaModelo.js';

export const Producto = sequelize.define(
'Producto',
{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING(100)
    },
    precio:{
        type:DataTypes.DECIMAL(10,2)
    }
},
{
    tableName:'productos',
    timestamps:false
});

Categoria.hasMany(Producto,{
    foreignKey:'categoria_id',
    onDelete:'CASCADE'
});

Producto.belongsTo(Categoria,{
    foreignKey:'categoria_id'
});