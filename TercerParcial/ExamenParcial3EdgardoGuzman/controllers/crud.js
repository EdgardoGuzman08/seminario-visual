const connection = require('../db/cn');

exports.saveDip = (req, res) =>{
    const codigo = req.body.ID;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const partido = req.body.partido;

    connection.query('insert into diputado set ?', {ID: codigo, nombre: nombre, apellido: apellido, partido: partido}, (error)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/diputado');
        }
    })
}

exports.savePro = (req, res) =>{
    const idproyecto = req.body.idproyecto;
    const nombreproyecto = req.body.nombreproyecto;
    const ciudad = req.body.ciudad;
    const monto = req.body.monto;
    const iddiputado = req.body.iddiputado;

    connection.query('insert into proyecto set ?', {idproyecto: idproyecto, nombreproyecto: nombreproyecto, ciudad: ciudad, monto: monto, iddiputado: iddiputado}, (error)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/proyecto');
        }
    })
}
