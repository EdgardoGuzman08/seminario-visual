const connection = require('../db/cn');

exports.guardarDiputado = (req, res) =>{
    const codigo = req.body.iddiputado;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    connection.query('insert into diputados set ?', {iddiputado: codigo, nombre: nombre, apellido: apellido}, (error)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/diputados');
        }
    })
}

exports.guardarProyecto= (req, res) =>{
    const idproyectos = req.body.idproyectos;
    const nombreproyecto = req.body.nombreproyecto;

    const ciudad = req.body.ciudad;
    const monto = req.body.monto;
    const iddiputados = req.body.iddiputados;

    connection.query('insert into proyectos set ?', {idproyectos: idproyectos, nombreproyecto: nombreproyecto, ciudad: ciudad, monto: monto, iddiputados: iddiputados}, (error)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/proyectos');
        }
    })
}
