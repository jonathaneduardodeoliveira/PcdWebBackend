const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const alunoRoutes = require('./routes/alunos');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/alunos', alunoRoutes);

app.get('/', (req, res) => {
    res.send('PcDWeb Backend rodando com MySQL!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
