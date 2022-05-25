/*conectanto ao BD*/
/*Passando 5 parametros, database, usuario, senha, host e dialect*/
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'root',
    {
        host: "localhost",
        dialect: 'mysql'
    })

sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso ao BD")
}).catch()