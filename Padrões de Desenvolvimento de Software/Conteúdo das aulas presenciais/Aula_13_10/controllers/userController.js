const User = require('../models/userModel');
const { use } = require('../routes');


exports.createUser = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const newUser = await User.create({ nome, email, senha });
        res.json(newUser);
    } catch (error) {
        res.json({ error: error.message });
    }
}


exports.getUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.json({ error: error.message });
    }
}
