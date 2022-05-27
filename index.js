const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


/*conf*/
/*template engine*/
const hbs = handlebars.create({
    defaultLayout: "main"
})
app.engine("handlebars", () => hbs)
app.set("view engine", "handlebars")


/*conexão com banco de dados*/
const sequelize = new Sequelize('test', 'root', 'root',
    {
        host: "localhost",
        dialect: 'mysql'
    })

//rotas
app.get('/cad', function (req, res) {
    //res.send('Rota de Cadastro de Posts!!!')
    res.render('formulario.handlebars')
})


app.listen(8080, function () {
    console.log("Servidor Rodando na URL http://localhost:8080");
});