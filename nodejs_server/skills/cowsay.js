const progressBar = require("progress");
const { exec } = require('child_process');
const path = require("path");

const bar = new progressBar(":bar", {total: 100});
const time = setInterval(() => {
  bar.tick();
  if(bar.complete) {
    clearInterval(time);
    console.log('bar full');
    console.log("===Instalando dependencias===");
    exec(`npx cowsay`, (error, stdout, stderr) => {
      if(error) {
        console.log(`error: ${error.message}`);
      } 
      if (stderr) {
        console.log(`stderr: ${stderr}`);
      } 
      console.log("===Tudo pronto para começar==="); 
    });
  }
}, 10);
