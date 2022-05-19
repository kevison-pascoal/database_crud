let exec = require('child_process').exec;
let cowsay = require('cowsay');
exec('cd', function(error, stdout, stderr){
  console.log('funcionando em ' + stdout);
});
exec = require('child_process').exec, cd = exec('cd');
cd.stdout.setEncoding('utf8');
cd.stdout.on('data', function(data){
  console.log('Data: ' + data);
});
exec(`npx cowsay oi helo`, (error, stdout, stderr) => {
  console.log(stdout);
})

console.log(cowsay.say({
  text: 'Hello World!',
  e: 'oO',
  T: 'U ',
}));