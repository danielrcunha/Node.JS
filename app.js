/*criando um servidor http */
var http = require('http');

/*http.createServer().listen(8081);*/

http.createServer(function (req, res) {
    res.end("Ola, voce esta conectado!!!");
}).listen(8080);

console.log("O Servidor Rodando!");