const express = require('express');
const routes = express.Router();


routes.get('/', (req, res) => {
    res.send('Primeira rota!');
});


module.exports = routes;
// export { routes as default };