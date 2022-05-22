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
    console.log();
    console.log(chalk.red('Second BarProgress'));
  }
}, 1);

const barProgress = new ProgressBar(':bar', time = 1000);
const interval = setInterval(() => {
  barProgress.tick();
  if (barProgress.complete) {
    clearInterval(interval);
    console.log(chalk.green('Complete The Second Progress'));
  }
}, 1);
