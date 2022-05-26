const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'root',
    {
        host: "localhost",
        dialect: 'mysql'
    })

/*conf template engine*/
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.listen(8080, function () {
    console.log("Servidor Rodando na URL http://localhost:8080");
});