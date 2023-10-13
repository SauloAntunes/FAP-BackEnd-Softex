const express = require('express');

const app = express();

app.use(express.json());

let Carros = [
    {
        id: 1,
        modelo: "Palio",
        valor: "35000",
        ano: 2010
    },
    {
        id: 2,
        modelo: "Fiat",
        valor: "30000",
        ano: 2005
    },
    {
        id: 3,
        modelo: "Gol",
        valor: "48000",
        ano: 2020
    }
]


app.get('/carros', (req, res)=>{
    let msg = '';
    Carros.forEach(carro=>{
        msg += 
           `<br>Id.........: ${carro.id}
            <br>Modelo: ${carro.modelo}
            <br>Valor....: ${carro.valor}
            <br>Ano.....: ${carro.ano}</br>
            `    
    });

    res.send(msg);
})

app.post('/cadastrar', (req, res)=>{
    let cadastrar_carro = req.body;
    Carros.push(cadastrar_carro);
})

app.delete('/excluir/:id', (req, res)=>{
    let excluir_carro = req.params.id;
    Carros.splice(excluir_carro - 1, 1);
})

app.listen(3000, ()=>{
    console.log('Servidor iniciado!');
})
