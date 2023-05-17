const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./router'));

app.get('/', (req,res)=>{
    res.redirect('principal')
});

app.set('port', 8000);
app.listen(app.get('port'), ()=>{
    console.log('Servidor iniciado http://localhost:' + app.get('port'));
});