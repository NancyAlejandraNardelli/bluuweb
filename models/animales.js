const connection = require('./conection');

const getAnimales = async()=>{
    const conn = await connection()
    const result = await conn.execute('SELECT * FROM animales;');

    return result[0]
}

module.exports = {
    getAnimales
}
    
