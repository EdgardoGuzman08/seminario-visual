const express = require('express');
const connection = require('./db/cn');
const router = express.Router();

router.get('/principal',(req, res) => {
    res.render('principal')
});


router.get('/diputados',(req, res)=>{
    connection.query('select * from diputados',(error,result)=>{
        if(error){
            throw error;
        }
        else{
            res.render('diputados', {datos: result})
            
        }
    });
    
});

router.get('/proyectos',(req, res)=>{
    connection.query('select * from proyectos',(error,result)=>{
        if(error){
            throw error;
        }
        else{
            res.render('proyectos', {dato: result})
            
        }
    });
    
});

router.get('/cDiputado', (req, res)=>{
    res.render('cDiputado');
});

router.get('/cProyecto', (req, res)=>{
    res.render('cProyecto');
});

const crud = require('./controllers/crud');
router.post('/guardarDiputado', crud.guardarDiputado);
router.post('/guardarProyecto', crud.guardarProyecto);

module.exports =router