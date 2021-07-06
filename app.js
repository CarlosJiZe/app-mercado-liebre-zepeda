const express = require('express');
const app = express();
app.use(express.static('public'));

process.env.PORT= process.env.PORT|| 3001

app.listen(process.env.PORT || 3001, ()=>{
    console.log('Servidor funcionando en ' + process.env.PORT);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/ingreso', (req,res)=>{
    res.sendFile(__dirname + '/views/ingreso.html');
});

