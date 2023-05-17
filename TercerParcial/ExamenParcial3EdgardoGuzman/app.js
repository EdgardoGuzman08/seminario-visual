const express = require('express');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./router'));

app.get('/', (req,res)=>{
    res.redirect('menu')
});

app.set('port', 8888);
app.listen(app.get('port'), ()=>{
    console.log('Servidor iniciado http://localhost:' + app.get('port'));
});