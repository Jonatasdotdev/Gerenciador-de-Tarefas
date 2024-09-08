// routes/tasks.js
const express = require('express');
const Task = require('../models/Task');
const verifyToken = require('../middleware/verifyToken'); // Middleware para verificar o token JWT

const router = express.Router();

// Usar o middleware em todas as rotas
router.use(verifyToken);

// Criar nova tarefa
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const userId = req.user.id; // O ID do usuário autenticado
    try {
        const taskId = await Task.create(userId, title, description);
        res.status(201).json({ id: taskId, title, description, completed: false });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar tarefa' });
    }
});

// Listar todas as tarefas do usuário
router.get('/', async (req, res) => {
    const userId = req.user.id; // O ID do usuário autenticado
    try {
        const tasks = await Task.findAll(userId);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao listar tarefas' });
    }
});

// Atualizar tarefa
router.put('/:id', async (req, res) => {
    const taskId = req.params.id;
    const { completed } = req.body; // Apenas completed

    try {
        // Atualiza apenas o estado de conclusão
        await Task.update(taskId, completed);
        res.json({ message: 'Tarefa atualizada com sucesso', completed });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
});



// Excluir tarefa
router.delete('/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
        await Task.delete(taskId);
        res.json({ message: 'Tarefa excluída com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao excluir tarefa' });
    }
});

module.exports = router;
