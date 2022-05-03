const repl = require('repl');
const local = repl.start();
local.on('exit', () => {
  console.log('exiting repl');
  process.exit();
})
local.on('math', () => {
  console.log('coding math actived');
});