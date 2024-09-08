const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();



// Cadastro de Usuário
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = await User.create(email, hashedPassword);
        res.status(201).json({ id: userId, email });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
});

// Login de Usuário
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findByEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
            // Aqui, use process.env.JWT_SECRET
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Credenciais inválidas' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao autenticar usuário' });
    }
});

module.exports = router;
