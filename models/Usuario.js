const db = require('./dB')


const Usuario = db.sequelize.define('usuarios',{
    nome: {
        type: db.Sequelize.STRING
    },
    sobrenome: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.STRING
    }
})