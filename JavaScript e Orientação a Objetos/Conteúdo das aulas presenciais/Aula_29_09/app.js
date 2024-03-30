const express = require('express');
const mysql2 = require('mysql2');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'root', 
    database: 'empresa',

});

db.connect((error) => {
    if (error) {
        console.log(`Erro ao conectar com o banco de dados: ${error}.`);
    } else {
        console.log(`Banco de dados conectado com sucesso.`);
    }
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/formulario', (req, res) => {
    res.render('formulario.ejs');
});

app.post('/cadastrar', (req, res) => {
    const { nome, preco } = req.body;
    const inserir = 'INSERT INTO produto (nome, preco) VALUES (?, ?)';

    db.query(inserir, [nome, preco], (error) => {
        if (error) {
            console.log(`Erro ao inserir no banco de dados: ${error}`);
        } else {
            res.send(`Produto cadastrado com sucesso!`);
        }
    });
});


app.listen(3000, () => {
    console.log('Servidor inicializado!');
});
