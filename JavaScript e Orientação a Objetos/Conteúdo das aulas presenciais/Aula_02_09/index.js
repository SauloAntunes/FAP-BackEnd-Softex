const express = require('express');

const app = express();

app.use(express.json());

let array_usuarios = [];

app.get('/usuarios', (req, res)=>{
    array_usuarios.forEach((user) => {
        res.send(`Nome => ${user.nome} Idade => ${user.idade}`)
    })

})

app.post('/cadastrar-usuarios', (req, res)=>{
    const dados = req.body;
    console.log('Nome: ', dados.nome);
    console.log('Idade: ', dados.idade);
    array_usuarios.push(dados);
    res.send(array_usuarios);
})


app.listen(3000, ()=>{
    console.log('Servidor iniciado!');
})
