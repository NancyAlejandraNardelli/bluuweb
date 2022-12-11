const {createPool} = require('mysql2/promise');
require('dotenv').config(); // requerimos el módulo dotenv

const connection = async() =>{
    const conn = await createPool({
            host: process.env.HOST, // usamos las variables de entorno
            user: process.env.USER,
            password: process.env.DBPASS,
            database: process.env.DB,
            ssl:{
                rejectUnauthorized:false
            }
        });
    return conn
}

module.exports = connection;
