/*conectanto ao BD - aula 17*/
/*Passando 5 parametros, database, usuario, senha, host e dialect*/
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'root',
    {
        host: "localhost",
        dialect: 'mysql'
    })

sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso ao BD!")
}).catch(function (erro) {
    console.log("Falha ao se conectar ao BD: " + erro)
})

/*aula 18 - criando um model para criar tabela no BD*/
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//foi usando para criar a tabela
/*Postagem.sync({ force: true })*/

//criando outra TB usuario com mais campos
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }


})

Usuario.sync({ force: true })

