const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

router.post('/cadastrar', async (req, res) => {
    try {
        const aluno = await Aluno.create({
            nomeCompleto: req.body.nomeCompleto,
            email: req.body.email,
            telefone: req.body.telefone,
            escolaridade: req.body.escolaridade,
            documentos: req.body.documentos
        });
        res.status(201).json(aluno);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/listar', async (req, res) => {
    try {
        const alunos = await Aluno.findAll();
        res.status(200).json(alunos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
