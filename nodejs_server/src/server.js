const http = require('http');
const items = require('../skills/export');
const { dataBase, moreData } = require('../skills/export');
const host = '127.0.0.1';
const port = 3000;

console.log('DataBase is: %o', dataBase);
console.log('moreBase is: %o', moreData);

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write("My first server with nodejs :)\n");
  response.write(`Hello World in port ${port} and host ${host}!\n`);
  response.write(`DataBase:\n${JSON.stringify(dataBase)}`)
  response.end(`\nMoreBase:\n${JSON.stringify(moreData)}`);
})

app.listen(port, () => {
  console.log(`Server runing in port ${port} and host ${host}`);
});