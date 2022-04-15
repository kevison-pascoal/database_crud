const http = require('http');
//import https from "http";

const host = '127.0.0.1';
const port = 3000;

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write("My first server with nodejs :)\n");
  response.end(`Hello World in port ${port} and host ${host}!\n`);
})

app.listen(port, () => {
  console.log(`Server runing in port ${port} and host ${host}`);
});
