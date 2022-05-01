
const db = require('./dB')

const Post = db.sequelize.define('postagens',{
    titulo: { 
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.STRING
    }
})

module.exports = Post;



/*


Usuario.create({
    nome: "Pedro",
    sobrenome: "Bueno",
    idade: 23,
    email: "pedro.bueno@gmail.com" 
})*/