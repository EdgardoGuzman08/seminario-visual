const express = require('express');
const connection = require('./db/cn');
const router = express.Router();

router.get('/menu',(req, res) => {
    res.render('menu')
});


router.get('/diputado',(req, res)=>{
    connection.query('select * from diputado',(error,result)=>{
        if(error){
            throw error;
        }
        else{
            res.render('diputado', {datos: result})
            
        }
    });
    
});

router.get('/proyecto',(req, res)=>{
    connection.query('select * from proyecto',(error,result)=>{
        if(error){
            throw error;
        }
        else{
            res.render('proyecto', {proyecto: result})
            
        }
    });
    
});

router.get('/crearDip', (req, res)=>{
    res.render('crearDiputado');
});

router.get('/crearPro', (req, res)=>{
    connection.query('SELECT * FROM diputado', (error, result) => {
        if (error) {
            throw error;
        } else {
            res.render('crearProyecto', { diputados: result });
        }
    });
});

const crud = require('./controllers/crud');
router.post('/saveDip', crud.saveDip);
router.post('/savePro', crud.savePro);

router.get('/eliminarDip/:ID', (req, res)=>{
    const codigo = req.params.ID;
    connection.query('delete from diputado where ID=?', [codigo], (error, result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/diputado');
        }
    });
});

router.get('/eliminarPro/:idproyecto', (req, res)=>{
    const codigo = req.params.idproyecto;
    connection.query('delete from proyecto where idproyecto=?', [codigo], (error, result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/proyecto');
        }
    });
});

router.get('/detalle/:ID', (req, res) => {
    const idDiputado = req.params.ID;
    connection.query('SELECT * FROM proyecto WHERE iddiputado = ?', [idDiputado], (error, result) => {
        if (error) {
            throw error;
        } else {
            // Obtener el nombre del diputado
            connection.query('SELECT nombre, apellido FROM diputado WHERE id = ?', [idDiputado], (error, resultNombre) => {
                if (error) {
                    throw error;
                } else {
                    const nombre = resultNombre[0].nombre;
                    const apellido = resultNombre[0].apellido;
                    res.render('detalle', { infopro: result, diputado: nombre, diputado2: apellido });
                }
            });
        }
    });
});





module.exports = router;