import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    'practica2',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
        logging:false
    }
);

export const conectaBD = async() =>{
    try{
        await sequelize.authenticate();
        console.log('Conectado a MySQL');

        await sequelize.sync();
        console.log('Modelos sincronizados');
    }catch(error){
        console.log(error);
    }
}