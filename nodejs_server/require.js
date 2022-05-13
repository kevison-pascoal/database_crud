console.clear();
const chalk = require('chalk');
console.log(chalk.red('Progress Bar'));
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', {total: 100});
const timer = setInterval(() => {
  bar.tick();
  if(bar.complete) {
    clearInterval(timer);
    console.log(chalk.green('Complete progress'));
    console.log('');
  }
}, 50);