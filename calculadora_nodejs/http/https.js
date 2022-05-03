var http = require('http')

http.createServer(function(req, res){
    res.end('Welcome To The WebSite')
}).listen(8081)

console.log('Servidor Iniciado!')