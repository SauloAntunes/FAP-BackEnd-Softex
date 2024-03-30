const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('projetoSequelize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


try {
    sequelize.authenticate();
    console.log('Banco de dados conectado com sucesso!');
} catch (error) {
    console.log('Não foi possível conectar ao banco de dados!');
    console.log(error);
}


module.exports = sequelize;