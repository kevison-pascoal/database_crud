const http = require('http');
const express = require('express');
const app = express();

//import https from "http";

const host = '127.0.0.1';
const port = 3000;

const window = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write("My first server with nodejs :)\n");
  response.write("Nodemon install sucess full!\n");
  response.end(`Hello World in port ${port} and host ${host}!\n`);
});
window.listen(port, () => {
  console.log(`Server runing in port ${port} and host ${host}!`);
});

app.get('/welcome', (request, response) => {
  response.send( `Hi, welcome to the server in other url!\n` );
});
app.post('/different', (request, response) => {
  response.send( `The new dates are more robuste! Warning!\n` );
});
app.put('/something', (request, response) => {
  response.send( `In that place the date will be added! ` );
});
app.delete('/didNotLike', (request, response) => {
  response.send( `Here the dates will be deleted!` );
});

app.get('/', (request, response) => {
  response.send( `Server In Port ${port + 1} and host ${host} processed!\n` );
})

const server = app.listen(port + 1, () => {
  console.log( `Server in port ${port + 1} and host ${host} processed!` );
});

process.on('SIGTERM', () => {
  server.close( () => {
    console.log( `Process terminated` );
  })
});