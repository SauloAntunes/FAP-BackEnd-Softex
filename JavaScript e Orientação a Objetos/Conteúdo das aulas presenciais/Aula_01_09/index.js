const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Bem-vindo...');
})

app.get('/cadastrar/:id', (req, res)=>{
    const id = req.params.id;
    res.send(`Bem-vindo usuário ${id}`);
})


app.listen(3000, ()=>{
    console.log('Servidor iniciado!');
})
