const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
readline.question(`What's your name? `, name => {
  console.log(`Hi ${name}!`);
  readline.close();
})

const inquirer = require('inquirer');
const question = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];
inquirer.prompt(question).then(answers => {
  console.log(`Hi ${answers.name}!`);
})