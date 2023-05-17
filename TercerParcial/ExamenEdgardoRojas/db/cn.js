const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    port : 3306,
    user     : 'root',
    password : '12345',
    database : 'gobierno'
});

connection.connect((error)=>{
    if (error){
        throw error;
    }
    console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;
