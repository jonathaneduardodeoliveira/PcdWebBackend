const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Aluno = require('../models/Aluno');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth');
router.post('/cadastrar', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const senhaCriptografada = await bcrypt.hash(req.body.senha, salt);

        const aluno = await Aluno.create({
            nomeCompleto: req.body.nomeCompleto,
            email: req.body.email,
            telefone: req.body.telefone,
            escolaridade: req.body.escolaridade,
            documentos: req.body.documentos,
            senha: senhaCriptografada
        });
        res.status(201).json(aluno);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.post('/login', async (req, res) => {
    try {
        const aluno = await Aluno.findOne({ where: { email: req.body.email } });
        if (!aluno) {
            return res.status(404).json({ message: 'Aluno não encontrado' });
        }

        const senhaValida = await bcrypt.compare(req.body.senha, aluno.senha);
        if (!senhaValida) {
            return res.status(400).json({ message: 'Senha inválida' });
        }

        const token = jwt.sign({ id: aluno.id, email: aluno.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/listar', authMiddleware, async (req, res) => {
    try {
        const alunos = await Aluno.findAll();
        res.status(200).json(alunos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
