const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Aluno = sequelize.define('Aluno', {
    nomeCompleto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    escolaridade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documentos: {
        type: DataTypes.JSON,
        allowNull: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataCadastro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'alunos'
});

Aluno.sync({ alter: true })
    .then(() => console.log('Tabela de alunos sincronizada com o banco de dados'))
    .catch((err) => console.error('Erro ao sincronizar tabela de alunos:', err));

module.exports = Aluno;
