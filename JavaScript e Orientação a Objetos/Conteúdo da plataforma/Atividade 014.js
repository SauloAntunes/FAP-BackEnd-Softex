const Sequelize = require('sequelize');
const connection = new Sequelize('atividade014', 'root', ' ', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306});

const conexao = connection.authenticate()
    .then(function(){
        console.log('Conexão estabelecida!');
    })
    .catch(function(erro){
        console.log('Conexão não estabelecida!');
    })