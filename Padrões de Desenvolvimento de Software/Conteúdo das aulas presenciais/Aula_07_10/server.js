const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const dataBase = require('./db');
const User = require('./models/userModel');
const app = express();

app.use(routes);
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log('Servidor inicializado!');
});


dataBase.sync();
